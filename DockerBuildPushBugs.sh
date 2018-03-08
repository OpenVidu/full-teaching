#!/bin/sh

for i in $(seq 1 13); do

	echo
	echo "###########"
	echo "branch bug$i";
	echo "###########"
	echo
	echo "git checkout bug$i"
	git checkout bug${i}
	echo "Building front..."
	cd src/main/angular
	ng build --output-path ../resources/static
	echo "Building app and docker image..."
	cd ../../../
	mvn -DskipTests=true clean package docker:build
	echo "new tag 'bug$i' and push to DockerHub"
	docker tag codeurjc/full-teaching codeurjc/full-teaching:bug$i

done

for i in $(seq 1 13); do

	docker push codeurjc/full-teaching:bug$i

done

git checkout master
