# Course of Nodejs from Otus.ru. The "My courses" application

###Dockerfile run

##Development mode

####Build a front-end and a back-end images

Build image of development 

```bash
docker-compose -f ./config/docker-compose-dev.yml build
```

####Run

Run the images for development 

```bash
docker-compose -f ./config/docker-compose-dev.yml up

#or

docker-compose -f ./config/docker-compose-dev.yml up -d
```

The front-end server on http://localhost:5100/
The back-end server on http://localhost:5000/


##Production mode

####Build a front-end and a back-end images

Build image of production 

```bash
docker-compose -f ./config/docker-compose.yml build
```

####Run

Run the images for production 

```bash
docker-compose -f ./config/docker-compose.yml up

#or

docker-compose -f ./config/docker-compose.yml up -d
```

The front-end server on http://localhost:80/
The back-end server on http://localhost:5000/

