FROM node:latest

WORKDIR /app

COPY package.json ./

RUN npm install --save --legacy-peer-deps

COPY . .

CMD ["npm", "start"]