#!/bin/bash

echo loading development...
NODE_ENV=development node test/testLoad.js

echo 
echo loading production...
NODE_ENV=production node test/testLoad.js

echo 
echo loading {empty}...
NODE_ENV= node test/testLoad.js

echo 
echo loading anyother...
NODE_ENV=anyother node test/testLoad.js