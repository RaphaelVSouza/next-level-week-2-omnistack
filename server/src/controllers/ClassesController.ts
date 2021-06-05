import { Request, Response } from 'express';
import { db } from '../database/connection';
import convertHourToMinutes from '../utils/convertHourToMinutes';

interface ScheduleItem {
    week_day: number;
    from: string;
    to: string;
}

class ClassesController {

    async store(req: Request, res: Response) {

        const {
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost,
            schedule
        } = req.body;


        const trx = await db.transaction();
        try {

            const insertedUserIds = await trx('users').insert({
                name: name,
                avatar: avatar,
                whatsapp: whatsapp,
                bio: bio,
            });

            const user_id = insertedUserIds[0];

            const insertedClassesIds = await trx('classes').insert({
                subject,
                cost,
                user_id,
            })

            const class_id = insertedClassesIds[0];

            const classSchedule = schedule.map((scheduleItem: ScheduleItem) => {
                return {
                    week_day: scheduleItem.week_day,
                    from: convertHourToMinutes(scheduleItem.from),
                    to: convertHourToMinutes(scheduleItem.to),
                    class_id

                };
            });

            await trx('class_schedules').insert(classSchedule);

            await trx.commit();

            return res.status(201).send();

        } catch (error) {
            await trx.rollback();
            console.log(error)
            res.status(400).json({
                error: 'Unexpected error while creating new class'
            });
        }

    }

    async index(req: Request, res: Response) {

        const filters = req.query;

        const subject = filters.subject as string;
        const week_day = filters.week_day as string;
        const time = filters.time as string;

        if (!filters.week_day || !filters.subject || !filters.time) {
            return res.status(400).json({ error: 'Missing filters to search classes' });
        }

        const timeInMinutes = convertHourToMinutes(time);

        const classes = await db('classes')
            .whereExists(function () {
                this.select('class_schedules.*')
                    .from('class_schedules')
                    .whereRaw('`class_schedules`.`class_id` = `classes`.`id`')
                    .whereRaw('`class_schedules`.`week_day` = ??', [+week_day])
                    .whereRaw('`class_schedules`.`from` <= ??', [timeInMinutes])
                    .whereRaw('`class_schedules`.`to` > ??', [timeInMinutes])
            })
            .where('classes.subject', '=', subject)
            .join('users', 'classes.user_id', '=', 'users.id')
            .select(['classes.*', 'users.*']);

        return res.json(classes);
    }
}

export default new ClassesController();