# E-commerce Back End Starter Code [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

This back-end for an e-commerce application was devleoped to help internet retail companies stay competitive with similar companies by allowing clients easily access inventory information. Users can allow their clients to cateogory, product, and tag informatio to help define search and purchase items.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Updates](#updates)
- [License](#license)

## Installation

In order to use this application, users will need to install npm packaging system using 'npm init' in the command line. If you refer to the package.json you will see the dependencies needed for this application are mysql2, express, and sequelize. Install these by running 'npm i mysql2', 'npm i express', and 'npm i sequelize' respectively. Users will then need to access the mysql command by typing 'mysql -u root -p' into the command line. Once in the mysql command line, users will need to enter password and enter 'source db/schema.sql' to create the database. Next they will need to tell mysql to use the database by typing 'USE ecommerce_db'. Users will type 'quit' to exit back to the command line and seed the tables using 'npm run seed'. Lastly, to initiate the server, users will run 'node server'. Once the server is connected, users can use applications such as Insomnia to manipulate table data.

## Usage

Once 'node server' has been ran in the command line, the user can use applications such as Insomnia to GET, POST, PUT, or DELETE data in the database. The port for this server is currently at 3001, so users can manipulate data using 'localhost:3001/api/' with either 'categories', 'products', or 'tags' following the '/'.

[Click here to see a video of the application being used](https://drive.google.com/file/d/1_Tuoe96nW5cVocvhpWYVhctmBz-gEDSi/view?usp=sharing)

Repository Link: [E-Commerce-back-end repository](https://github.com/allygarcia152/e-commerce-back-end)

## Updates

This application was completed with starter code provided by Xandromus via the Coding-Boot-Camp. You can view the repository here: [Fantastic-Umbrella](https://github.com/coding-boot-camp/fantastic-umbrella)

## Liscense

This project is licensed under the MIT license. To abtain a copy of the license, visit: [https://choosealicense.com/licenses/mit](https://choosealicense.com/licenses/mit)
