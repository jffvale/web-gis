FROM node:alpine AS builder
COPY . /web-gis
WORKDIR /web-gis
RUN npm install -g @angular/cli
RUN npm install
CMD ng serve --port 8080 --proxy-config proxy.conf.js
EXPOSE 8080