# TrainingApp

This project was generated with [Spring-Boot](https://spring.io/) version 2.3.8.Release & [Angular CLI](https://angular.io/) version 11.1.1.

## Initial Setup

Install the following softwares:

1. [Intellij Idea Community Edition](https://www.jetbrains.com/idea/download/download-thanks.html?platform=windows&code=IIC)
2. [Visual Studio Code for windows](https://code.visualstudio.com/download)
3. [Java JDK 11](https://www.oracle.com/in/java/technologies/javase-jdk11-downloads.html) 
4. [Docker Desktop for Windows](https://hub.docker.com/editions/community/docker-ce-desktop-windows/)

Option 1: 
Run `docker-compose up` if all pre-requisite softwares and Docker Desktop are installed. You can run this command from cmd / powershell after doing cd to training library where docker-compose.yml file is present.  

Option 2:
If other softwares are installed and Docker Desktop is not installed, you can alternatively install [MySQL Database](https://dev.mysql.com/downloads/installer/) as stand alone DB and cd to training library and run `mvnw.cmd spring-boot:run` for a dev server. 

Navigate to `http://localhost:8080/` to access the app. For Docker setup, you can also access `http://host.docker.internal:8080/`
You can access `http://localhost:8080/swagger-ui.html` for api documentation.

## Training objective

A basic app has been designed for training to capture data fields input by user and save them to MYSQL database. 

![screenshot](https://github.com/insure-sense/training/blob/master/screenshot.jpg)

As a first step, you need to create the setup and understand how data flows from UI (Angular app) to backend (Java Spring Boot) to database (MySQL) 

Thereafter, you need to add an additional text input field named `Policy Notes` on the UI and save this user input to MySQL database.

## Development

Once the initial setup is done, subsequent development for Angular app should be done using Visual Studio Code and for backend api on Java should be done using IntelliJ Idea.

For Docker setup, you can use `mvnw.cmd spring-boot:build-image` to build new image after making changes. Alternatively `mvnw.cmd spring-boot:run` can be used for running it locally.
 
## Build in watch mode

Run `ng build --watch` to build the project in watch mode. Changes to UI will be loaded dynamically.
