//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
// import dotenv from 'dotenv';
// dotenv.config();

// Syncing all the models at once.
// conn.sync({ force: true }).then(() => {
//   server.listen(process.env.PORT, () => {
//     console.log('%s listening at 3001'); // eslint-disable-line no-console
//   });
// });
// axios.defaults.baseURL = `https://localhost:${process.env.PORT}` || 'http://localhost:3001';

conn.sync({ force: true }).then(() => {
  server.listen(process.env.PORT, () => {
    console.log("%s listening at 3000"); // eslint-disable-line no-console
  });
});
