Company API
===========

Project Overview
----------------

This project is a RESTful API for managing company records, built using Node.js, Express, and PostgreSQL. The API allows users to create, retrieve, update, and validate company records based on specified requirements.

Table of Contents
-----------------

*   Project Overview
    
*   Features
    
*   Technologies Used
    
*   Getting Started
    
    *   Prerequisites
        
    *   Installation
        
    *   Configuration
        
    *   Database Setup
        
    *   Running the Application
        
*   API Endpoints
    
*   Unit Testing
    
*   License
    

Features
--------

*   Create, read, update, delete and validate company records.
    
*   Unique constraint on ISIN values.
    
*   Basic error handling for validation failures and not found scenarios.
    
*   Connection to a PostgreSQL database.
    

Technologies Used
-----------------

*   **Node.js**
    
*   **Express.js**
    
*   **Sequelize** (ORM for PostgreSQL)
    
*   **PostgreSQL**
    
*   **dotenv** (for environment variables)
    
*   **CORS** (for handling cross-origin requests)
    
*   **Body-parser** (for parsing request bodies)
    

Getting Started
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
    

### Database Setup

1.  Open the PostgreSQL command line or any PostgreSQL client (like pgAdmin).
    
    In the local terminal, in order to create the database, you must run

    ```
    sudo -u postgres psql
    
    > CREATE DATABASE company_db;
    > CREATE USER myuser WITH PASSWORD 'mypassword';
    > GRANT ALL PRIVILEGES ON DATABASE company_db TO myuser;
    > \q
    
    ```
    
     To create the table
    
    ```
    \c company_db
    
    CREATE TABLE companies (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    exchange VARCHAR(255) NOT NULL,
    stock_ticker VARCHAR(20) NOT NULL,
    isin VARCHAR(20) NOT NULL UNIQUE,
    website VARCHAR(255));
    ```
    
    (Optional) If you want to add some records to the database to test if it's been initialised properly
    
    ```
    INSERT INTO companies (name, exchange, stock_ticker, isin, website) 
    VALUES 
    ('Apple Inc.', 'NASDAQ', 'AAPL', 'US0378331005', 'http://www.apple.com'),
    ('British Airways Plc', 'Pink Sheets', 'BAIRY', 'US1104193065', NULL);
    ```
    
    To make sure if they've been added 
    
    ``` 
    SELECT * FROM companies;
    
    ```
    
    
    

    
3.  Make sure that the user specified in your .env file has the necessary permissions to access and modify this database.
    

### Running the Application

1.  node server.js
    
2.  Server is running on port 3000
    
3.  You can now access the API at http://localhost:3000/api.
    

API Endpoints
-------------

### Create a company

*   **Endpoint:** POST /api/companies
    
*   { "name": "Company name", "stockTicker": "Ticker", "exchange": "Exchange", "isin": "ISIN", "website": "http://example.com"}
    

### Retrieve a Company by ID

*   **Endpoint:** GET /api/companies/:id
    

### Retrieve a Company by ISIN

*   **Endpoint:** GET /api/companies/isin/:isin
    

### Retrieve All Companies

*   **Endpoint:** GET /api/companies
    

### Update an Existing Company

*   **Endpoint:** PUT /api/companies/:id
    
*   { "name": "Updated company name", "stockTicker": "Updated ticker", "exchange": "Updated exchange", "isin": "Updated ISIN", "website": "http://updated-example.com"}


### Delete a Company by ID

*   **Endpoint:** DELETE /api/companies/:id
    

Unit Testing
------------

For unit testing, consider using a testing framework such as Mocha or Jest. You can write tests to validate the API's functionality and ensure that each endpoint behaves as expected.

License
-------

This project is licensed under the MIT License - see the LICENSE file for details.
