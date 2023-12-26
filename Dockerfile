FROM openjdk:17

WORKDIR /app

COPY . /app

# RUN mvn package

EXPOSE 8080

CMD ["java", "-jar", "students_app.jar"]
