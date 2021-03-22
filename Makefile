launch: 
	docker-compose up -d 

rebuild: 
	docker-compose build

kill: 
	docker-compose down

log-client:
	docker-compose logs -f client

log-api:
	docker-compose logs -f api  

log-mongo:
	docker-compose logs -f mongo  