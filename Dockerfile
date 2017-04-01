FROM mhart/alpine-node:7.8.0

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

RUN apk add --update python make g++ && \
    npm install fibers

COPY package.json /usr/src/app/
RUN npm install

COPY . /usr/src/app