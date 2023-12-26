FROM openjdk:17-jdk-slim

WORKDIR /app

COPY . /app
COPY students_db.sqlite /path/in/container/
COPY init_db.sql /path/in/container/

RUN apt-get update && apt-get install -y sqlite3

RUN sqlite3 /path/in/container/students_db.sqlite < /path/in/container/init_db.sql

EXPOSE 8080

CMD ["java", "-jar", "your-app.jar"]
