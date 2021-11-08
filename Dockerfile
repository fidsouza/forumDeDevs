FROM node:lts-slim

WORKDIR /usr/src/odddForum/

COPY package*.json ./

COPY . .

RUN apt-get update & npm i

CMD [ "npm","run","start:prod" ]
