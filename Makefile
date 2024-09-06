# Set of tasks related to the database
# --------------------------------------------------
startup-database:
	docker-compose up --build -d database

shutdown-database:
	docker-compose down -v --rmi local database

# Set of tasks related to the monorepo applications
# --------------------------------------------------
startup-all-apps:
	docker-compose up --build -d client server

startup-client-app:
	docker-compose up --build -d client

startup-server-app:
	docker-compose up --build -d server

# Shutdown all applications
shutdown-all-apps:
	docker-compose down -v --rmi local client server

shutdown-client-app:
	docker-compose down -v --rmi local client

shutdown-server-app:
	docker-compose down -v --rmi local server
