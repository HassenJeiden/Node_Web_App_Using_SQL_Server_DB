

const config = {
    user:process.env.USER, // better stored in an app setting such as process.env.DB_USER
    password: process.env.PSW, // better stored in an app setting such as process.env.DB_PASSWORD
    server: process.env.SERVER_NAME, // better stored in an app setting such as process.env.DB_SERVER
    port: process.env.PORT, // optional, defaults to 1433, better stored in an app setting such as process.env.DB_PORT
    database: process.env.DB_NAME, // better stored in an app setting such as process.env.DB_NAME
    authentication: {
        type: 'default'
    },
    options: {
        encrypt: true,
        trustServerCertificate: true,
        useUTC: true
    }
}
module.exports=config