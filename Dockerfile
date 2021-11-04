FROM node:lts-slim

WORKDIR /usr/src/odddForum/

COPY . /usr/src/odddForum/

RUN apt-get update & npm i

CMD npm run start:prod