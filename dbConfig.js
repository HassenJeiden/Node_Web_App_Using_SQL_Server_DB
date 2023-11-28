const odbc=require('odbc')

const connectionConfig = {
  connectionString: 'DSN=nodewebapp',
  Driver : "SQL Server",
  connectionTimeout: 10,
  loginTimeout: 10,
  
}
  module.exports = connectionConfig;