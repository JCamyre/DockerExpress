# DockerExpress

## How to run
Run the following commands:

First in the api folder to create api image:

`docker build -f Dockerfile -t api .`

Then create a container to execute the api image:

`docker run -it -p 4002:8000 api`

Next in the frontend folder create frontend image:

`docker build -f Dockerfile -t frontend .`

And create a container to run frontend image:

`docker run -it -p 4001:3000 frontend`

Finally, run in the root directory:

`docker-compose up --build`

Then check go to http://localhost:3050

