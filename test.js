const sql = require("mssql/msnodesqlv8");

const main = async () => {
  const pool = new sql.ConnectionPool({
    server: "HASSENS_HP\\hsnj",
    database: "NodeWebApp",
    options: {
      trustedConnection: true
    }
  });

  await pool.connect();

};
module.exports=main