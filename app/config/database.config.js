require('dotenv').config()

 const config = {
    dialect : process.env.DB_DIALECT || 'postgres',
    host :    process.env.DB_HOST    || 'localhost',
    username: process.env.DB_USER    || '',
    password: process.env.DB_PASS    || '',
    database: process.env.DB_NAME    || '',
    logging: console.log,
    define:{
        timestamps: true,
        underscored: true,
    }
}

module.exports = config