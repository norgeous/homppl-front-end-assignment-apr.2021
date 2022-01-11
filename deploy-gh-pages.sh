#!/bin/bash

git checkout gh-pages

git merge main

yarn build

mv build docs

git commit -am"deploy github pages"

git push

git checkout -
