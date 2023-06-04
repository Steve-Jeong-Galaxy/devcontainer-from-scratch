FROM node:20.2-alpine
WORKDIR /app
COPY package*.* /app
RUN npm ci
COPY . .
CMD ["node", "index.js"]
