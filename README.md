# monorepo-dockerized-full-stack-app-with-rollup
Turbo Monorepo for Dockerized Node.js and React full stack app with Rollup

# Set of commands related to the containers and images.
# --------------------------------------------------
# Remove all containers
docker rm -vf $(docker ps -aq)

# Remove all images
docker rmi -f $(docker images -aq)

# Set of tasks related to the adminer
# --------------------------------------------------
startup-adminer:
	docker-compose up --build -d adminer

shutdown-adminer:
	docker-compose down -v --rmi local adminer

- docker-compose.yml

  adminer:
    image: adminer
    restart: always
    ports:
      - 8080:8080

volumes:
  adminer:



docker exec -it server-container /bin/sh

docker run -it --rm monorepo-dockerized-full-stack-app-with-vite-server npm list
