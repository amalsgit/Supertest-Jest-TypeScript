# API-Test-Jest-TypeScript

A sample repo showcasing functional api test automation with Axios, Jest and TypeScript.

The tests are run against few dummy API's exposed at https://jsonplaceholder.typicode.com/. Because of this not all data assertions are done for the tests.

## Prerequisites

- [NodeJS](https://nodejs.org/en/download/)
- [Yarn](https://yarnpkg.com/getting-started/install)

## Installation

Clone the generated repository on your local machine, move to the project root folder and install the dependencies defined in [`package.json`](./package.json)

```bash
$ yarn
```

## Running the test

To run the Jest tests

```bash
$ yarn test
```

## Results

An HTML report with the request response details are generated at the end of tests and will open automatically once the tests are done. The files are stored under the `html-report` directory

## Writing own tests

House rules for writing tests:

- The tests are located in `src/tests` folder
- The `actions` folder consists of individual api calls that are composed together to create a user scenario in tests. Always define individual api calls here
- The `utils/config.ts` file is the place to manage application environments and urls
- The `axiosClient.ts` file consist of the main axios client used to make api calls and an interceptor to log the details on the Html report
- Make sure that each test is independent and the test data created for each test is deleted as part of a cleanup stage
