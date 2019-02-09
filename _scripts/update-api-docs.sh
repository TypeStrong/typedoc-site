#!/usr/bin/env bash
FOLDER=typedoc
URL=https://github.com/TypeStrong/typedoc.git

if [ ! -d "$FOLDER" ] ; then
    git clone $URL $FOLDER
    cd "$FOLDER"
else
    cd "$FOLDER"
    git pull $URL
fi

latesttag=$(git describe --tags --abbrev=0)
echo checking out ${latesttag}
git checkout ${latesttag}

npm i
npm run prepare

bin/typedoc --out ../api --name "TypeDoc Documentation" --mode file src/lib