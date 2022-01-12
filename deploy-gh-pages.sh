#!/bin/bash

git checkout gh-pages

git merge main

rm -r build docs

yarn build

mv build docs

git add docs

git commit -am"deploy github pages"

# git push

# git checkout -
