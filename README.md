# CT Frontend Task Using ReactJs

The repository contains a task to build an app that helps manage orders. The app makes use of Semantic UI for the UI design, redux toolkit for state management and uses React hooks completely without any class components.

# Demo


# Libraries Used

- **Redux Toolkit** - An implementation of the popular redux state management library. It simplifies tremendously a lot of the code that we previously had to write when using the native redux and exposes slices of the store instead of the entire thing.
- **Axios** - Http request library
- **React Firebase** - An firebase sdk library that provides HOC's as a way of simplifying our connection to firebase.
- **Semantic UI** - UI library with some common components like tables and grid
- **Redux Mock Store** - A mock store for redux
- **Jest** - Facebook's test runner library
- **React Router** - Routing library for react


# ToDo

There are quite a number of things I could not complete due to a hectic schedule. Here are some of them

- Written more tests to cover the redux actions, reducers and UI for the order list. I could also have written some integration tests to check the flow starting from the UI
- Made use of Flow Typing library to provide some static typing.
- Designed the UI better 
- Implement functionality to fetch order by id so that visiting the url directly will populate it with data
- Provide functionality to change the limit for the number of records to retrieve
- Implement the update order functionality
- Made use of fakerJs for generating random data for testing
- Implement the database connection in a generic manner that allows switching the data persistence layer easily
- Validate that the environment variables are provided 

# Build Instructions

- Clone the repository ```git clone https://github.com/gate3/ct-frontend-task.git```
- Rename the .env.sample file to .env and provide the required fields
- Run ```npm i``` to install dependencies
- To run in development mode ```yarn start```
- Enjoy and give some feedback :-)

Thank you
