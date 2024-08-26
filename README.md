# monorepo-dockerized-full-stack-app-with-rollup
Turbo Monorepo for Dockerized Node.js and React full stack app with Rollup

# Set of commands related to the containers and images.
# --------------------------------------------------
# Remove all containers
docker rm -vf $(docker ps -aq)

# Remove all images
docker rmi -f $(docker images -aq)