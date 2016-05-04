Ez Config Loader
=============

加载 Json 格式的配置文件
----------------------

支持根据环境变量 `NODE_ENV` 加载不同的配置文件，用于方便开发环境与生产环境调用不同的资源


## 安装
`$ npm install ez-config-loader --save`

## 用法

```js
var configLoader = require('ez-config-loader');
var config = configLoader('path2config/config'); 
```

### 未设定环境变量情况下
将会加载 `./path2config/config.json` 文件
 
### 设定环境变量情况下
`$ exports NODE_ENV=development`
将会加载 `./path2config/config.development.json`

### 临时应用环境变量
`NODE_ENV=temp node yourapp.js`
将会加载 `./path2config/config.temp.json`

### 如果不能指定环境变量的配置文件
如果未成功加载环境变量指定的配置文件，将会按照未指定环境变量方式加载

## test
`npm test`