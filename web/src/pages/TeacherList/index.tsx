import React, { FormEvent, useState } from 'react';
import Header from '../../components/Header';

import * as S from './styles';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import Input from '../../components/Input/index';
import Select from '../../components/Select';
import { api } from '../../services/api';


function TeacherList() {

    const [teachers, setTeachers] = useState([]);

    const [subject, setSubject] = useState('');
    const [week_day, setWeekDay] = useState('');
    const [time, setTime] = useState('');

    async function searchTeachers(e: FormEvent) {
        e.preventDefault();

        const response = await api.get('classes', {
            params: {
                subject,
                week_day,
                time,
            }
        });

        setTeachers(response.data);
    }



    return (

        <S.Wrapper className="container">
            <Header title="Estes são os proffys disponíveis.">
                <S.Form id="search-teachers" onSubmit={searchTeachers}>
                    <Select
                        name="subject"
                        label="Matéria"
                        value={subject}
                        onChange={e => setSubject(e.target.value)}
                        options={[
                            { value: 'Artes', label: 'Artes' },
                            { value: 'Biologia', label: 'Biologia' },
                            { value: 'Ciências', label: 'Ciências' },
                            { value: 'Educação Física', label: 'Educação Física' },
                            { value: 'Geografia', label: 'Geografia' },
                            { value: 'História', label: 'História' },
                            { value: 'Matemática', label: 'Matemática' },
                            { value: 'Química', label: 'Química' },
                        ]}
                    />
                    <Select
                        name="week_day"
                        label="Dia da semana"
                        value={week_day}
                        onChange={e => setWeekDay(e.target.value)}
                        options={[
                            { value: '0', label: 'Domingo' },
                            { value: '1', label: 'Segunda-feira' },
                            { value: '2', label: 'Terça-feira' },
                            { value: '3', label: 'Quarta-feira' },
                            { value: '4', label: 'Quinta-feira' },
                            { value: '5', label: 'Sexta-feira' },
                            { value: '6', label: 'Sabádo' },

                        ]}
                    />
                    <Input
                        type="time"
                        name="time"
                        label="Hora"
                        value={time}
                        onChange={e => {
                            setTime(e.target.value);
                        }
                        }
                    />

                    <button type="submit">Buscar</button>
                </S.Form>
            </Header>

            <S.Main>

                {
                    showTeachers()


                }
            </S.Main>
        </S.Wrapper>

    );

    function showTeachers() {
        if (teachers) {
            return teachers.map((teacher: Teacher) => {
                return (
                    <TeacherItem key={teacher.id} teacher={teacher} />
                )
            })
        }

        return (<p>Não há proffys disponíveis nesse horário</p>)


    };
}

export default TeacherList;


// Mensagem pra pesquisar proffys
// Caso o proffy exista, mostrar na tela
// Caso não, mostrar uma mensagem de que não existe proffy