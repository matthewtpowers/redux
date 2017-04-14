FROM node

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
#Install app dependencies
RUN npm install
COPY . /usr/src/app
RUN npm run build

EXPOSE 7770

#This is exec form which is preferred
#ex of running bash, ENTRYPOINT ["/bin/bash", "-c", "echo Hello, $name"]
#CMD [ "npm", "run", "start:server" ]
RUN chmod +x scripts/entrypoint.sh
ENTRYPOINT ["scripts/entrypoint.sh"]
