#!/bin/bash

CURR_COMMIT=$(git rev-parse HEAD);
CURR_VERSION=$(node -e "console.log(require('./package.json').version);");
VER_HASH=$(git rev-list -n 1 v$CURR_VERSION);

# Don't want to redo version bump
if [ $CURR_COMMIT == $VER_HASH ]
then
    echo 'Already up to date'
    exit
fi

npm version patch;

NEW_VERSION=$(node -e "console.log(require('./package.json').version);");

echo $NEW_VERSION;

git push origin head;

npm run buildprod

aws s3 sync ./ s3://ssb.codes --size-only --delete;

# Invalidate cache
aws cloudfront create-invalidation \
    --distribution-id E3G7JESS6VKD0W \
    --paths "/*";