FROM node:6.8.1

RUN npm install -g yarn

ENV HOME /usr/src/app
WORKDIR /usr/src/app

ADD package.json .

RUN yarn --prod
ADD dist/server.bundle.js server.bundle.js

ENV NODE_ENV production

CMD ["node", "server.bundle.js"]
