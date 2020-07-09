FROM node:13.12.0-alpine

WORKDIR /web

COPY ./package.json /web/package.json

RUN npm install

RUN npm install react-scripts

COPY . /web/

EXPOSE 3000

CMD ["npm", "start"]