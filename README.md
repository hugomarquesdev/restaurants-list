# Restaurant Listing App 🍽️

This is a web application that fetches restaurant data from a Node.js backend built with Express and displays it to users. It allows users to list all the restaurants, check if they're currently open or closed (in 24-hour format), and search for restaurants by name, address, or tag.

## Features

- List all restaurants with details.
- Check if restaurants are open or closed based on their working hours.
- Search for restaurants by name, address, or tag with a debouncing system to prevent excessive API requests.
- Backend built with Node.js and Express.
- Frontend created with Next.js and TypeScript.
- UI styling using Styled-Components.
- Frontend unit tests implemented with Jest.

## Installation

Before running the app, make sure you have Node.js installed. You can download it from [nodejs.org](https://nodejs.org/).

### Backend (Server)
(Make sure to keep this server running to test the app)

```bash
cd server
yarn install
yarn dev
````

### Frontend (Client)
```bash
cd client
yarn install
yarn dev
````
- #### Testing
```bash
cd client
yarn test
````
- #### Build
```bash
cd client
yarn build
````

## License
This project is licensed under the MIT License.
