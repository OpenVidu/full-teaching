#!/bin/sh
cd src/main/angular
ng build --output-path ../resources/static
cd ../../../
mvn clean package docker:build
docker push codeurjc/full-teaching

