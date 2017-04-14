FROM node

CMD echo '1'
RUN mkdir -p /usr/src/app
CMD echo '2'
WORKDIR /usr/src/app
CMD echo '3'
#Install app dependencies
COPY package.json /usr/src/app
RUN npm install
CMD echo '4'
COPY . /usr/src/app
CMD echo '5'
RUN npm run build

EXPOSE 7770
CMD echo '6'

CMD [ "npm", "run", "start:server" ]
