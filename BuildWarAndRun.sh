#!/bin/sh
mvn -DskipTests=true clean package
java -jar target/full-teaching-0.5-SNAPSHOT.war
