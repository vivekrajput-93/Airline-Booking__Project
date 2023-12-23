# Welcome to the Flights and Search Service

## Project Set-up 

- clone the project on your localhost
- Execute `npm install` on the same path as of your root directory of the downloaded Project
- Create a `.env` file in the root direactory and add the following assignment variable 
      --- `PORT=3000`

- Now the connect the sequelize, by installing it npm and package and then run the commnand ` npx sequelize init ` outside the src path.

- Inside the `src/config` folder create a new file as `config.json` and then add the following given below json 

````
{
  "development": {
    "username": <YOUR__DB_LOGIN>,
    "password": <YOUR_DB_PASSWORD>,
    "database": "Flights_Search_DB",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
} 


````

- Once you've added your db config as listed above, go to the src folder from your terminal and execute `npx sequelize db:create`

- npx sequelize db:migrate


##  DB Design

-- Airplane Table
-- Flights Tabel
-- Airport Table
-- City Table 


- A flight belongs to an airplane but one airplane can be used in multiple flights
- A city has many airports but one airport belongs to a city
- One airport can have flights, but a flight belongs to one airport


## List of Tables

#### CITY ---> id, name,
###  Airport ---> id, name, address, city_id
-- Relationship --> City has many airports and Airport belongs to a city (one to many)