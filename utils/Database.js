import SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase({ name: 'UserDB.db' });

export const initDB = () => {
  db.transaction(tx => {
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, email TEXT, password TEXT);'
    );
  });
};

export const insertUser = (name, email, password, success) => {
  db.transaction(tx => {
    tx.executeSql(
      'INSERT INTO users (name, email, password) VALUES (?, ?, ?);',
      [name, email, password],
      (_, result) => success(result),
      (_, error) => console.log(error)
    );
  });
};

export const getUser = (email, password, callback) => {
  db.transaction(tx => {
    tx.executeSql(
      'SELECT * FROM users WHERE email = ? AND password = ?;',
      [email, password],
      (_, { rows }) => callback(rows._array),
      (_, error) => console.log(error)
    );
  });
};

export const getAllUsers = callback => {
  db.transaction(tx => {
    tx.executeSql(
      'SELECT * FROM users;',
      [],
      (_, { rows }) => callback(rows._array),
      (_, error) => console.log(error)
    );
  });
};

export const updateUser = (id, name, email, callback) => {
  db.transaction(tx => {
    tx.executeSql(
      'UPDATE users SET name = ?, email = ? WHERE id = ?;',
      [name, email, id],
      (_, result) => callback(result),
      (_, error) => console.log(error)
    );
  });
};

export const deleteUser = (id, callback) => {
  db.transaction(tx => {
    tx.executeSql(
      'DELETE FROM users WHERE id = ?;',
      [id],
      (_, result) => callback(result),
      (_, error) => console.log(error)
    );
  });
};