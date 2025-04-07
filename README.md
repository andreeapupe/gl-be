Company API
===========

Project overview
----------------

This project is a RESTful API for managing company records, built using Node.js, Express, and PostgreSQL. The API allows users to create, retrieve, update, delete and validate company records based on specified requirements.

Table of contents
-----------------

*   Project overview
    
*   Features
    
*   Technologies used
    
*   Getting started
    
    *   Prerequisites
        
    *   Installation
        
    *   Configuration
        
    *   Database setup
        
    *   Running the application
        
*   API Endpoints
    
*   Unit testing
    
*   License
    

Features
--------

*   Create, read, update, delete and validate company records.
    
*   Unique constraint on ISIN values.
    
*   Basic error handling for validation failures and not found scenarios.
    
*   Connection to a PostgreSQL database.
    

Technologies used
-----------------

*   **Node.js**
    
*   **Express.js**
    
*   **Sequelize** (ORM for PostgreSQL)
    
*   **PostgreSQL**
    
*   **dotenv** (for environment variables)
    
*   **CORS** (for handling cross-origin requests)
    
*   **Body-parser** (for parsing request bodies)
    

Getting started
---------------
### Installation

1.  git clone https://github.com/andreeapupe/gl-be.git
    
2.  npm install

Before you begin, ensure you have the following installed on your local machine:

*   [Node.js](https://nodejs.org/) (v14 or higher)
    
*   [PostgreSQL](https://www.postgresql.org/download/) (v12 or higher)


### Prerequisites

Before you begin, ensure you have the following installed on your local machine:

*   [Node.js](https://nodejs.org/) (v14 or higher)
    
*   [PostgreSQL](https://www.postgresql.org/download/) (v12 or higher)
    

### Configuration

Create a .env file in the root of the project with the following content

```
    DB_USERNAME=your_username
    DB_PASSWORD=your_password
    DB_NAME=company_db
    DB_HOST=localhost
```

Replace your\_username and your\_password with your PostgreSQL credentials.
    

### Database setup

1.  Open the PostgreSQL command line
    
    Navigate to the folder containing the **init.sql** file and open a terminal in that directory. It should be found in the root project.

    ```
    psql -U postgres -f init.sql  
    
    ```
    
    In order to check if the data has been added
    
    ```
    psql -U postgres -d company_db;
    
    SELECT * FROM companies;
    ```
    
    
    
    

    
3.  Make sure that the user specified in your .env file has the necessary permissions to access and modify this database.
    

### Running the application

1. Run this in the root directory of the project
    ```bash 
       node server.js
    ```
    
2.  Server is running on port 3000
    
3.  You can now access the API at http://localhost:3000/api.
    

API Endpoints
-------------

### Create a company

*   **Endpoint:** POST /api/companies
    
*   { "name": "Company name", "stockTicker": "Ticker", "exchange": "Exchange", "isin": "ISIN", "website": "http://example.com"}
    

### Retrieve a company by ID

*   **Endpoint:** GET /api/companies/:id
    

### Retrieve a company by ISIN

*   **Endpoint:** GET /api/companies/isin/:isin
    

### Retrieve all companies

*   **Endpoint:** GET /api/companies
    

### Update an existing company

*   **Endpoint:** PUT /api/companies/:id
    
*   { "name": "Updated company name", "stockTicker": "Updated ticker", "exchange": "Updated exchange", "isin": "Updated ISIN", "website": "http://updated-example.com"}


### Delete a company by ID

*   **Endpoint:** DELETE /api/companies/:id
    

Unit testing
------------

Application testing is conducted using **Jest** for unit testing and **Supertest** for integration testing with the Express routes.

### Test file structure


#### Unit tests for the company 
### - `companyController.test.js` - Unit tests for the company 


This file contains unit tests for the functions defined in `controllers/companyController.js`. All controller methods are tested:

- `createCompany`
- `getCompanyById`
- `getAllCompanies`
- `updateCompany`
- `deleteCompany`



### - `companyRoutes.int.test.js` - Integration tests for the company routes

This file contains integration tests for the routes defined in `routes/companyRoutes.js`.



### How to run tests

1. Install the necessary dependencies:

```bash
npm install --save-dev jest supertest
```

2. Run the tests 

   ```bash 
   npm test 
   ```   
   OR   
   ```bash 
   npx jest 
   ```



License
-------

This project is licensed under the *Non-Commercial License* - see the **LICENSE.md** file for details.
