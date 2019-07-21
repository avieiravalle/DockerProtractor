# Scaling Tests with Docker

* steps

Sample project to experiment with Protractor tests running on Chrome and Firefox headless from Docker containers.

* Pre-requisites

Docker needs to be installed and running.
Selenium, Selenium Chorme headless and Selenium Firefox headless images need to be pulled from Docker Hub.

* docker login

1.Chrome

docker run -d -p 4444:4444 -v /dev/shm:/dev/shm selenium/standalone-chrome:3.141.59-selenium
docker run -d -p 4444:4444 --shm-size=2g selenium/standalone-chrome:3.141.59-selenium

2.Firefox

docker run -d -p 4444:4444 -v /dev/shm:/dev/shm selenium/standalone-firefox:3.141.59-selenium
docker run -d -p 4444:4444 --shm-size 2g selenium/standalone-firefox:3.141.59-selenium
***********************************************************************************************

* Installation
Run npm i to install the project dev dependencies.

## Before running the tests

Before running the tests, make sure that Selenium hub, Chrome headless, and Firefox headless containers are up and runnning.
Use docker ps -a to check if they are up and running.
If they are not running, use docker-compose up -d to start them.

* To restart the containers use docker-compose restart.

* To shut down the containers use docker-compose down.

* Checking Selenium Grid
With the containers up and running, access the following URL in your preferred browser to check that the Selenium Grid was correctly setup: <http://localhost:4444/grid/console.>

* Scaling services
Run docker-compose up -d --scale chrome=10 to scale 10 Chrome services, each with two Chrome browsers.
Run docker-compose up -d --scale firefox=5 to scale 5 Firefox services, each with four Firefox browsers.

Take a look at the docker-compose.yml file for more details on how the containers are setup.

* Running the tests
Run npm t.
To run the e2e tests on both Chrome and Firefox headless browsers (Chrome tests will run first, then Firefox tests will run).

Run npm run test:
Chrome to run the e2e tests only on Chrome headless browser (all tests will run in only one browser instance).

Run npm run test:
Firefox to run the e2e tests only on Firefox headless browser (all tests will run in only one browser instance).

Run npm run test:multi to run the e2e tests on both Chrome and Firefox headless browsers in parallel.

Run npm run test:chrome:
Parallel to run the e2e tests only on Chrome headless browser (each spec file will be executed in a different browser instance in parallel).
