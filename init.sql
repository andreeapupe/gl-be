CREATE DATABASE company_db;

\c company_db

CREATE TABLE companies (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    exchange VARCHAR(255) NOT NULL,
    stock_ticker VARCHAR(20) NOT NULL,
    isin VARCHAR(20) NOT NULL UNIQUE,
    website VARCHAR(255)
);

INSERT INTO companies (name, exchange, stock_ticker, isin, website) VALUES
('Apple Inc.', 'NASDAQ', 'AAPL', 'US0378331005', 'http://www.apple.com'),
('British Airways Plc', 'Pink Sheets', 'BAIRY', 'US1104193065', NULL),
('Heineken NV', 'Euronext Amsterdam', 'HEIA', 'NL0000009165', NULL),
('Panasonic Corp', 'Tokyo Stock Exchange', '6752', 'JP3866800000', 'http://www.panasonic.co.jp'),
('Porsche Automobil', 'Deutsche Börse', 'PAH3', 'DE000PAH0038', 'https://www.porsche.com/');
