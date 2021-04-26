import knex from 'knex';
import path from 'path';

const dbPath = path.resolve(__dirname, 'database.sqlite');
const migrationsPath = path.resolve(__dirname, 'migrations');

const db = knex({
    client: 'sqlite3',
    connection: {
        filename: dbPath
    },
    migrations: {
        directory: migrationsPath
    },
    useNullAsDefault: true,
});

export { db };