FROM node:9.7-alpine

ADD . /opt/app

WORKDIR /opt/app

RUN npm install

CMD node ./bin/www
