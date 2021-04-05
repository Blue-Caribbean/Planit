const { Pool } = require('pg');
const config = require('../config.js');
debugger;
const pool = new Pool({
  user: config.pgUser,
  host: config.host,
  database: config.database,
  password: config.pgPass,
  port: config.port,
});

// to query just use pool.query(thing)
