/**
 * 加载 Json 格式的配置文件
 * @param {string} path2config 配置文件路径及文件名
 *
 * 支持根据环境变量 `NODE_ENV` 加载不同的配置文件，
 * 用于方便开发环境与生产环境调用不同的资源
 */
var path = require('path');

function ConfigLoader(path2config) {

    path2config = path.resolve(path2config).replace(/.json$/, '');

    // 根据环境变量加载不同配置文件
    var NODE_ENV = process.env.NODE_ENV;
    var configPath = path2config + (NODE_ENV && '.' + NODE_ENV) + '.json';

    // 如果指定配置文件不存在，则加载默认
    try{
        return require(configPath);
    }catch(err){
        configPath = path2config + '.json';
        return require(configPath);
    }
}

module.exports = ConfigLoader;