# COMPLAINTS
<h4>A web app for people to voice their complaints<br />

## There are 2 parts that this UI interacts with
- Nodejs and express to serve data to UI

## UI Installation
$ npm install - pull all ui dependencies <br />

## Server Installation
$ cd to server/ from root directory<br />
$ npm install - pull all nodejs dependencies <br />

## Start the UI
$ cd to root directory<br />
$ npm run start - will automatically open the UI on your favorite browser (http://localhost:3000)<br />

## Start the Server
$ cd to /server directory<br />
$ npm run start:server (http://localhost:5000)<br />

## Run test
$ cd ../ - back to root directory<br />
$ npm test - run all tests<br />

## Pushing to PCF
$ cd server/ directory and make sure you copy the build from root directory to /server/ directory<br />
$ cf push -f manifest-[your env here].yml (env = dev, qa or pr)<br />
