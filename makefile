unit-tests:
	docker build -t snahider/katacoda-nodejs .
	docker run -t snahider/katacoda-nodejs npm run unit-test

e2e-tests:
	docker build -t snahider/katacoda-nodejs .
	docker run -t snahider/katacoda-nodejs npm run e2e-test