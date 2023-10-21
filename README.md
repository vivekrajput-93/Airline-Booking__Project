# Welcome to the Flights and Search Service

## Project Set-up 

- clone the project on your localhost
- Execute `npm install` on the same path as of your root directory of the downloaded Project
- Create a `.env` file in the root direactory and add the following assignment variable 
      --- `PORT=3000`

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
