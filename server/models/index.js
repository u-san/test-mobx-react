const fs = require('fs');
const path = require('path');

const connect = require('./model').connect;
const { dbDirs, dbDirsMap } = require('../config');

// 初始化数据库配置
require('./dbs');

// 创建默认目录
dbDirs.forEach(item => {
  if (item.defaultCreate) {
    if (!fs.existsSync(item.path)) fs.mkdirSync(item.path);
  }
});

// 链接数据库
const dbs = connect(path.join(dbDirsMap.base.path, 'data'));

module.exports = dbs;
