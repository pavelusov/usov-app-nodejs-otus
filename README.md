# Course of Nodejs from Otus.ru. The "My courses" application

#### Environment without docker

The back-end folder has the ```.env-enxample``` file. 
You need to copy this file to the same folder and rename it in ```.env```.

You can change values:

```dotenv
MONGODB_TEST_URI=mongodb://localhost:27017/user_test
MONGODB_DEV_URI=mongodb://localhost:27017/courses_app_dev
MONGODB_URI=mongodb://localhost:27017/courses_app
DEBUG=back-end:*
PORT=5000
JWT_SECRET=1234567890
```

The front-end folder has the ```.env-enxample``` file. 
You need to copy this file to the same folder and rename it in ```.env```.

You can change values:

```dotenv
JWT_SECRET=1234567890
PORT=3000

# without Docker
API_HOST=http://localhost:5000/api

# with Docker
#API_HOST=http://back-end:5000/api
```

### Dockerfile run

*After starting docker-compose, you need to wait for mongodb to start and back-end connect to it. The container with the back-end will restart until it is connected.

#### Environment for docker compose's file

The root folder has the ```.env``` file. You can change the ports values

```dotenv
# DOCKER-COMPOSE'S ENVIRONMENT

# default values for docker-compose
DB_PORT=27017
BACKEND_PORT=5000

# dev mode
FRONTEND_PORT=3000

# prod mode
#FRONTEND_PORT=80
```

## Development mode

#### Build a front-end and a back-end images

Build image of development 

```bash
docker-compose -f ./config/docker-compose-dev.yml build
```

#### Run

Run the images for development 

```bash
docker-compose -f ./config/docker-compose-dev.yml up

#or

docker-compose -f ./config/docker-compose-dev.yml up -d
```

The front-end server on http://localhost:3000/
The back-end server on http://localhost:5000/


## Production mode

#### Build a front-end and a back-end images

Build image of production 

```bash
docker-compose -f ./config/docker-compose.yml build
```

#### Run

Run the images for production 

```bash
docker-compose -f ./config/docker-compose.yml up

#or

docker-compose -f ./config/docker-compose.yml up -d
```

The front-end server on http://localhost:80/
The back-end server on http://localhost:5000/
