//Creating pool

const pg = require('pg');

const config = {
  database: 'weeeknd-to-do-app', 
  host: 'local', 
  port: 5432
};

const pool = new pg.Pool(config);

pool.on("connect", () => {
  console.log("connected to postgres");
});

pool.on("error", (err) => {
  console.log("error connecting to postgres", err);
});

module.exports = pool;

