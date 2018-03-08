#!/bin/sh
cd src/main/angular
ng build --output-path ../resources/static
cd ../../../
mvn -DskipTests=true clean package
java -jar target/full-teaching-0.5-SNAPSHOT.war
