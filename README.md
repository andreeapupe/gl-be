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

*   Create, read, update, and validate company records.
    
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

### Prerequisites

Before you begin, ensure you have the following installed on your local machine:

*   [Node.js](https://nodejs.org/) (v14 or higher)
    
*   [PostgreSQL](https://www.postgresql.org/download/) (v12 or higher)
    

### Installation

1.  git clone https://github.com/yourusername/company-api.gitcd company-api
    
2.  npm install
    

### Configuration

1.  DB\_USERNAME=your\_usernameDB\_PASSWORD=your\_passwordDB\_NAME=company\_dbDB\_HOST=localhostPORT=3000Replace your\_username and your\_password with your PostgreSQL credentials. You can also change company\_dbto your preferred database name.
    

### Database Setup

1.  Open the PostgreSQL command line or any PostgreSQL client (like pgAdmin).
    
2.  CREATE DATABASE company\_db;
    
3.  Make sure that the user specified in your .env file has the necessary permissions to access and modify this database.
    

### Running the Application

1.  node server.js
    
2.  Server is running on port 3000
    
3.  You can now access the API at http://localhost:3000/api.
    

API Endpoints
-------------

### Create a Company

*   **Endpoint:** POST /api/companies
    
*   { "name": "Company Name", "stockTicker": "Ticker", "exchange": "Exchange", "isin": "ISIN", "website": "http://example.com"}
    

### Retrieve a Company by ID

*   **Endpoint:** GET /api/companies/:id
    

### Retrieve a Company by ISIN

*   **Endpoint:** GET /api/companies/isin/:isin
    

### Retrieve All Companies

*   **Endpoint:** GET /api/companies
    

### Update an Existing Company

*   **Endpoint:** PUT /api/companies/:id
    
*   { "name": "Updated Company Name", "stockTicker": "Updated Ticker", "exchange": "Updated Exchange", "isin": "Updated ISIN", "website": "http://updated-example.com"}
    

Unit Testing
------------

For unit testing, consider using a testing framework such as Mocha or Jest. You can write tests to validate the API's functionality and ensure that each endpoint behaves as expected.

License
-------

This project is licensed under the MIT License - see the LICENSE file for details.
