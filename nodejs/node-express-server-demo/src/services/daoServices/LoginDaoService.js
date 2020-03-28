// const mysql = require('../../config/mysql');

// module.exports = {
//   getUserByName(name, callback) { // 用户名查重
//     const sql = 'select count(*) as count from users where username=?'
//     mysql.query(sql, name, callback)
//   },
//   register(user, callback) { // 注册用户
//     const sql = 'insert into users set ?'
//     mysql.query(sql, user, callback)
//   }
// }