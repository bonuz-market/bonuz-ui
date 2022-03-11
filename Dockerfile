FROM node:latest

RUN yarn set version 3.2.0
RUN yarn -v

WORKDIR /app

COPY . /app
