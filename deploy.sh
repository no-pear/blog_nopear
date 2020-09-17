#!/usr/bin/env sh

set -e

npm run build

cd blog/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:no-pear/blog_nopear.git master:gh-pages