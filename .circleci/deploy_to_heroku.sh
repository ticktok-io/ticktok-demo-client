#!/usr/bin/env bash

set -e

HEROKU=registry.heroku.com
HEROKU_APP=ticktok-demo-client

check_health() {
    echo checking health...
    until [[ $(curl --silent  --fail $1/mgmt/health/ 2>&1 | grep '"UP"') != "" ]]; do
        sleep 1
    done
    echo $1 is healthy!
}


if [ ${CIRCLE_BRANCH} == "master" ]; then
    IMAGE=$HEROKU/$HEROKU_APP/web
    echo $(heroku auth:token) | docker login --username=_ --password-stdin $HEROKU
    echo image: $IMAGE
    docker tag app $IMAGE
    docker push $IMAGE
    echo $IMAGE deployed to heroku
    heroku releases web
    check_health https://$HEROKU_APP.herokuapp.com
else
    echo No deployment from $CIRCLE_BRANCH branch
fi
