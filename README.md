# School Management app

This is a monorepo project using Turbo and NestJS for building a MongoDB-powered API and a frontend web client developed with React + TypeScript.

## Installation

1. Clone the repository:
```bash
git clone https://github.com/shuvro1226/schoolmanagement.git
```
2. Install dependencies:
```
cd schoolmanagement
npm install
```
## Development

To start the development environment, run the following command:
```bash
npm run dev
```
This will launch Turbo in development mode and start the API server at http://localhost:3000/. The GraphQL endpoint is available at http://localhost:3000/graphql and the client server will be running at http://localhost:5173/.

## Building

To build the project for production, run the following command:
```bash
npm run build
```
This will compile the TypeScript code and generate the necessary build artifacts.

## Starting the API

To start the API server in production mode, run the following command:
```bash
npm run start
```

## Running Tests

To run all tests for `api` and `client` run the following command fromn project root folder:
```bash
npm run test
```

The same command can be used to run inside `api` and `client` folder to run tests only for api and client.

## Project Structure

- The `apps` folder contains two sub-folders: `api` and `client`.
- The `api` folder contains the backend API code built with NestJS. It has its own package.json, source code in the `src` folder, and TypeScript configuration in the `tsconfig.json` file.
- The `client` folder contains the frontend web client code built with React. It also has its own package.json, source code in the `src` folder, and TypeScript configuration in the `tsconfig.json` file.
- The root folder contains the main package.json, package lock file, and Turbo configuration file.

Please refer to the respective README files inside the `api` and `client` folders for more information on setting up and running each component.


