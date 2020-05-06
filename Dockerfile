FROM node:alpine AS builder
COPY . /web-gis
WORKDIR /web-gis
RUN npm install -g http-server
CMD http-server
EXPOSE 8080