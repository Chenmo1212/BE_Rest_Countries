<h1 align="center">Country Information API</h1>

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#about-the-project">About The Project</a></li>
    <li><a href="#built-with">Built With</a></li>
    <li><a href="#getting-started">Getting Started</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

## About The Project

The Country Information API is a Node.js and Express.js-based application that provides information about countries. Users can retrieve data about specific countries or get a list of all countries.

### Built With

* [Node.js](https://nodejs.org/)
* [Express.js](https://expressjs.com/)
* [Axios](https://axios-http.com/)
* [Jest](https://jestjs.io/)
* [Supertest](https://www.npmjs.com/package/supertest)

## Getting Started

To run this project locally and access the API, follow these steps:

### Prerequisites

You'll need to have the following software installed on your machine:

* Node.js and npm - [Download Here](https://nodejs.org/)

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your_username/country-information-api.git
   ```
2. Navigate to the project directory:
   ```sh
   cd country-information-api
   ```
3. Install the project dependencies:
   ```sh
   npm install
   ```
4. Start the server:
   ```sh
   npm start
   ```
   The API will be available at http://localhost:3001.

### Usage

You can use this API to retrieve information about countries. There are two main endpoints:

1. To get a simple instruction, make a GET request to:
```bash
http://localhost:3001/
```

2. To get a list of all countries, make a GET request to:
```bash
http://localhost:3001/all
```

3. To get information about a specific country, make a GET request to:
```bash
http://localhost:3001/country/{country-name}
```

### Roadmap

- [x] Implement basic API functionality 
- [x] Add error handling and logging
- [x] Add automated test
- [ ] Implement authentication and authorization
- [ ] Add support for additional data fields
See the [open issues](https://github.com/Chenmo1212/BE_Rest_Countries/issues) for a list of proposed features and known issues.

### Contributing
Contributions are welcome! Here's how you can get involved:

1. `Fork` the Project 
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a `Pull Request`

### License
Distributed under the MIT License. 

### Acknowledgments
Here are some resources and tools that were used in the development of this project:

- Node.js 
- Express.js 
- Axios
- Jest
- Supertest
