FROM node:16
#Creating the app direcotry 
WORKDIR /usr/src/app
#Image come with node.js and NPM already installed
COPY package*.json ./
#the * is a wild card, here we are coppying the packsage of json on to docker
RUN npm install
#Bundle app source code
COPY . .
#We use port 8080 we use expose to instruct docker where to map 
EXPOSE 80

CMD ["node","server.js"]
