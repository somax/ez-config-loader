Ez Config Loader
=============

加载 Json 格式的配置文件
----------------------

支持根据环境变量 `NODE_ENV` 加载不同的配置文件，用于方便开发环境与生产环境调用不同的资源


## 引用
`$ npm install ez-config-loader --save`

```js
var configLoader = require('ez-config-loader');
```

## 用法
### 无环境变量
```js
var config = configLoader('path2config/config')); // 加载 ./path2config/testConfig.json
```

### 有环境变量
`$ exports NODE_ENV=development`

```js
var config = configLoader('path2config/config')); // 加载 ./path2config/testConfig.development.json
```

## test
`npm test`