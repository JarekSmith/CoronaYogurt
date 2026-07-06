import initSqlsjs from 'sql.js';

const SQL = await initSqlsjs();

const db = new SQL.Database()