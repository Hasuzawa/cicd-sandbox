# Overview

This minimum app would act as a simple server.

Using Docker, we can build an image and deploy it.

## Build

Use the TS compiler to compile the TS code into a dist/ output, which can be run using node.

```sh
# Compile project into executable code
npm run build
# Build a local Docker image
docker build -f Dockerfile -t shop:1.0.0 .
```

## Envrionment Variables

| env       | default | comment                                                           |
| --------- | ------- | ----------------------------------------------------------------- |
| PORT      | 8080    | The port the app is listening                                     |
| SHOP_NAME | Shop    | The name of the shop, useful for uniquely identifying an instance |

## Version

| Tool       | Version |
| ---------- | ------- |
| npm        | 11.1.0  |
| tsc        | 5.7.3   |
| ts-node    | 10.9.2  |
| docker CLI | 28.0.1  |
