#!/bin/sh
mvn -DskipTests=true clean package
java -jar target/full-teaching-1.0.0.war
