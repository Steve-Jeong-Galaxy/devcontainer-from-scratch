FROM node:20.2-alpine
RUN apk --no-cache add git && git config --global user.name "Steve Jeong" && git config --global user.email "jst0930@gmail.com"
WORKDIR /app
COPY package*.* /app
RUN npm ci
COPY . .
CMD ["node", "index.js"]
