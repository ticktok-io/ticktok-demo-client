FROM node:9.7-alpine

ADD . /opt/app

WORKDIR /opt/app

RUN npm install --unsafe-perm

CMD node ./bin/www
