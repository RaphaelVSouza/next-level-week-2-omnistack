import path from 'path';
import dotenv from 'dotenv'
dotenv.config()

const localPath = path.resolve(__dirname, 'src', 'database', 'database.sqlite');
const prodPath = path.resolve(__dirname, 'tmp', 'database.sqlite');
const migrationsPath = path.resolve(__dirname, 'src', 'database', 'migrations');

interface KnexConfig {
    [key: string]: object;
};

const knexConfig: KnexConfig = {
    development: {
        client: 'sqlite3',
        connection: {
            filename: localPath
        },
        migrations: {
            directory: migrationsPath
        },
        useNullAsDefault: true,
    },
    production: {
        client: 'sqlite3',
        connection: {
            filename: prodPath
        },
        migrations: {
            directory: migrationsPath
        },
        useNullAsDefault: true,
    },

};


const environment = process.env.NODE_ENV || 'development' as string;


export default knexConfig[environment]