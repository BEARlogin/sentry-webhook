FROM node:16.15-alpine

WORKDIR /app

COPY package-lock.json .
COPY package.json .

RUN npm i

COPY . .

EXPOSE 3000

CMD  ["npm","run","start"]


