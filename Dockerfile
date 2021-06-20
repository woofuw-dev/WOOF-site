FROM node:16-alpine

# App root
WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./
RUN npm i

# Add source files etc
COPY . .

CMD ["node", "index.js"]