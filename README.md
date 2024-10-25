FOR SERVER -- DOCKER (In server directory)
docker build --tag weather-app-server .
docker run -d -p 3035:3035 --env-file .env weather-app-server
docker stop <image id>

FOR CLIENT -- DOCKER (In client directory)
docker build --tag weather-app-client .
docker run -p 8080:80 weather-app-client

RUN Complete application
docker-compose down
docker-compose up --build 
