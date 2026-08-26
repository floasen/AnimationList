FROM node:24-alpine

WORKDIR /app

COPY ["WebApp/package*.json", "WebApp/"]
WORKDIR /app/WebApp
RUN npm install 
WORKDIR /app
COPY . .

WORKDIR /app/WebApp
EXPOSE 3000
CMD [ "npm", "run", "dev" ]