const path = require('path')
const isProduction = process.env.NODE_ENV === 'production'
const HOME_PATH = process.env.HOME || (process.env.HOMEDRIVE + process.env.HOMEPATH);
const DB_PATH = `${HOME_PATH}/.mobx_test`;
const root = (dir) => path.resolve(__dirname, '..', dir)

// We need these globals to fetch data on server-side
global.HOSTNAME = 'localhost'
global.PORT = 2000

const dbDirs = [{
  name: 'base',
  path: DB_PATH,
  defaultCreate: true
}, {
  name: 'todo',
  path: `${DB_PATH}/todo`,
  defaultCreate: true
}];

const dbDirsMap = {};
dbDirs.forEach(d => dbDirsMap[d.name] = d);

export default {
  http: {
    port: global.PORT,
    hostname: global.HOSTNAME,
    favicon: path.join(__dirname, '../src/assets/favicon.ico'),
    static: {
      //'/build': root('build'),
      '/assets': root('src/assets')
    }
  },
  server: {
    DEV: !isProduction,
  },
  session: {
    salt: 'SUPER_SALTY_YES?',
    secret: 'SUPER_SECRET_KEY_KERE',
    expires: 4 * 3600 * 1000 // 4 hours
  },
  databases: {
    mongo: 'mongodb://127.0.0.1:27017/mobx-starter'
  },
  dbDirs,
  dbDirsMap
}