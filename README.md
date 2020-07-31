# Handshake Web Application Simulation (Lab Work):
Designed & developed a replica of the Handshake Web Application which is widely used by college students to apply for jobs and by various employers to post jobs. 
This project was developed as a part of Lab Work for the Graduate Course CMPE 273 (Enterprise Distributed Systems) at San Jose State University.

# System Architecture and Design:
The system architecture used previously was revamped by implementing GraphQL instead of REST APIs.

The new system architecture was based on 5 technologies namely React, NodeJS, GraphQL, Mongo DB and Amazon AWS. These technologies had various significance with respect to their usage.

1. React: React was primarily used for the front-end display and creating the web pages. It helped in creating the UI of the application responsive thanks to its component-based architecture.

2. NodeJS: It was used mainly for the backend. It was used in this case for pushing the data into the Kafka topics. It acted as a producer or consumer based on the type of request it sends/receives.

3. Mongo DB: It was used for the creation and maintenance of unstructured database which was essential where the structure of data is not determined from the start. It helped in creating simpler CRUD operations.

4. GraphQL: It was in place of REST APIs and helped immensely in letting the client specify exactly what data it needs & in making it less complicated to aggregate data from multiple sources.

5. AWS Cloud EC2 instance: This was where the entire application including the front end, back end and Kafka back end was deployed. There were 3 EC2 instances created for the same and the database was deployed on MongoDB Atlas Server.
