# Meet App

Objective
The objective of this project is to build a serverless, progressive web application (PWA) with React using a test-driven development (TDD) technique. The application uses the Google Calendar API to fetch upcoming events.

Context
The Meet App combines the benefits of serverless architecture and PWAs, which includes:

Serverless: No backend maintenance, easy to scale, always available, no cost for idle time.
PWAs: Instant loading, offline support, push notifications, "add to home screen" prompt, responsive design, and cross-platform compatibility.
The app is built using TDD to ensure high-quality code, and data visualization is used to make the app more visually appealing and informative.

Key Features
Filter events by city.
Show/hide event details.
Specify the number of events.
Use the app when offline.
Add an app shortcut to the home screen.
View a chart showing the number of upcoming events by city.
User Stories
As a user, I would like to be able to filter events by city so that I can see the list of events that take place in that city.
As a user, I would like to be able to show/hide event details so that I can see more/less information about an event.
As a user, I would like to be able to specify the number of events I want to view in the app so that I can see more or fewer events in the events list at once.
As a user, I would like to be able to use the app when offline so that I can see the events I viewed the last time I was online.
As a user, I would like to be able to add the app shortcut to my home screen so that I can open the app faster.
As a user, I would like to be able to see a chart showing the upcoming events in each city so that I know what events are organized in which city.

Tecnical Requirements
Javascript, React, Node.js, AWS

# Serverless Functions in My Meet App

In my Meet App, I'm leveraging the power of serverless computing to handle data processing and API requests. This approach allows me to scale my app effectively, eliminate the need for backend maintenance, and only pay for the compute time actually used.

## How I Use Serverless Functions

### Interacting with Google Calendar API

I use AWS Lambda functions to fetch and process data from the Google Calendar API. When a user wants to view events in a certain city, a Lambda function is triggered. This function makes a request to the Google Calendar API, retrieves relevant event data, and returns it to the client.

This helps streamline the process of interacting with the API and provides a layer of abstraction between my app and the API, keeping my front-end code cleaner and more focused on rendering UI components.

### Managing Event Data

In addition to fetching data, serverless functions also handle the filtering and sorting of event data. When the user chooses to filter events by city or specify the number of events they wish to view, these preferences are passed to my Lambda function, which then filters and returns the desired data.

This approach offloads the potentially computationally heavy task of data processing from the client-side, ensuring smooth performance of my app regardless of the amount of data to process.

### Offline Support

I also use serverless functions to cache event data for offline use. When events are fetched, a Lambda function stores the data in a cache. If the user opens the app without an internet connection, the function retrieves data from this cache, allowing the user to view the events they last accessed.

## Benefits of Serverless Functions in this Context

- **Scalability**: As the user base grows, serverless functions allow me to handle increased loads without worrying about server capacity.
- **Efficiency**: By offloading API interactions and data processing to serverless functions, I keep my client-side codebase efficient and focused on providing a great user experience.
- **Cost-effectiveness**: With serverless architecture, I only pay for the compute time used, making it a cost-effective solution for my project.
- **Availability**: Serverless functions are always available and ready to execute, ensuring a seamless experience for my users.

As I progress in building the Meet App, I aim to leverage more capabilities of serverless architecture to keep my application robust, scalable, and efficient.
