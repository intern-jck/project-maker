const sqlite3 = require('sqlite3');

function createDatabase() {
  const newdb = new sqlite3.Database('./server/db/test.db', (err) => {
    if (err) {
      console.log('Getting error ' + err);
      exit(1);
    }
    createTables(newdb);
  });
}

function createTables(newdb) {
  newdb.exec(`
    CREATE TABLE test_table (
      name TEXT
    );
  `);
}

function testDB() {
  db.run(`INSERT INTO test_table (name) VALUES ('tester2')`, (error) => {
    if (error) {
      console.log(error);
    }
    console.log(`Inserted @ ${this.lastID}`);
  });
}

function select_all(callback) {
  return db.all(`SELECT * FROM test_table`, (error, rows) => {
    if (error) {
      console.log(`select_all error: ${error}`);
    }
    callback(error, rows);
  });
}

const db = new sqlite3.Database('./server/db/test.db', sqlite3.OPEN_READWRITE, (err) => {
  console.log('INITIALIZING DATABASE');
  if (err && err.code == 'SQLITE_CANTOPEN') {
    createDatabase();
    return;
  } else if (err) {
    console.log('Getting error ' + err);
    exit(1);
  }
});

module.exports = {
  testDB,
  select_all,
};
