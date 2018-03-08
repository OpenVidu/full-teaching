#!/bin/sh
cd src/main/angular
ng build --output-path ../resources/static
cd ../../../
mvn -DskipTests=true clean package docker:build

