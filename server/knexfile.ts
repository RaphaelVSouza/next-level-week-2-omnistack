import path from 'path';

const dbPath = path.resolve(__dirname, 'src', 'database', 'database.sqlite');
const migrationsPath = path.resolve(__dirname, 'src', 'database', 'migrations');

export default {
    client: 'sqlite3',
    connection: {
        filename: dbPath
    },
    migrations: {
        directory: migrationsPath
    },
    useNullAsDefault: true,
};
