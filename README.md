# Clearly - Design an API

## Getting Started

### Task Interpretation

Due to the open ended nature of the task, I tried to start with a problem then work towards a solution.

The problem I envisioned was the optimization of certain vehicle types to transport similiar cargo.

For example, if you were transporting wood by truck, perhaps it would be more efficient to transport it in bulk by train.

With that in mind I set about creating an API that could show trips, the vehicles used, the cargo transported and the projects that encapsulated them.

To that end the two most useful endpoint is getTripsByProject, there is also CRUD for projects (which is fully tested) and a few other endpoints relating to the other data types.

### Prerequisites

Before you begin, ensure you have the following installed:

- [Docker](https://www.docker.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/)

### Set Up

[Loom](https://www.loom.com/share/a4686999e5684b619aba5d785d5bf097)

The fastest way to setup the project is to:

Run `npm run setup`.

The setup command:

1. Builds the docker containers for both the test and development environments.
2. Installs dependencies.
3. Runs migrations that set up the [database structure](./database-structure.png).
4. Runs seeds to populate the database with mock data.
5. Creates types from the GraphQL schema.
6. Begins the server.

### Tests

```bash
npm run test
```
