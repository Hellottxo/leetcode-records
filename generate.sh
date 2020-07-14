#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成README
node generate.js

git add .
git commit -m 'docs📖: generate README'
git push

echo 'push成功！'

cd -