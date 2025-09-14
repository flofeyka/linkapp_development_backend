FROM node:18-alpine AS production

WORKDIR /usr/src/app

COPY package*.json ./
COPY yarn*.lock ./

RUN yarn install

EXPOSE 8000

CMD ["node", "app.js"]