unit-tests:
	docker build -t nodejs .
	docker run -t nodejs npm run unit-test

e2e-tests:
	docker build -t nodejs .
	docker run -t nodejs npm run e2e-test