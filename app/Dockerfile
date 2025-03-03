FROM node:23-alpine

LABEL VERSION = 1.0.0

WORKDIR /usr/var/app
COPY ./dist .
COPY package.json .
COPY package-lock.json .
RUN npm install --omit=dev

ENTRYPOINT ["node", "app.js"]
