#!/bin/sh
cd src/main/angular
ng build --env=prod --output-path ../resources/static
cd ../../../
mvn clean package
java -jar target/full-teaching-0.5-SNAPSHOT.war
