FROM node:23-alpine

# LABEL VERSION = 1.0.0 this should be provided in CICD
LABEL org.opencontainers.image.source=https://github.com/Hasuzawa/cicd-sandbox
LABEL org.opencontainers.image.description="Simple container"
LABEL org.opencontainers.image.licenses=MIT

WORKDIR /usr/var/app
COPY ./dist .
COPY package.json .
COPY package-lock.json .
RUN npm install --omit=dev

ENTRYPOINT ["node", "app.js"]
