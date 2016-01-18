Ez Config Loader
=============

加载 Json 格式的配置文件
----------------------

支持根据环境变量 `NODE_ENV` 加载不同的配置文件，用于方便开发环境与生产环境调用不同的资源


## 引用
`npm install ez-config-loader --save`

`var configLoader = require('../index.js');`

## 用法
### 无环境变量
```js
var config = configLoader(__dirname + '/testConfig')); // 加载 testConfig.json
```

### 有环境变量
`exports NODE_ENV=development`

```js
var config = configLoader(__dirname + '/testConfig')); // 加载 testConfig.development.json
```

## test
`npm test`