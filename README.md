# DeFi Cross Border Payment Platform - PandaBorderless

This is a monorepo containing 1 project as follows:
- backend API

## Deployment
- Backend (using ): 

## Backend

### Setting up the server locally
- Clone the project
- Install NodeJS **LTS** version from <a href="https://nodejs.org/en/download/">NodeJs Official Page</a>
- Download the product on this page
- Unzip the downloaded file to a folder in your computer
- Download Ganache from https://trufflesuite.com/ganache/
- Open Terminal
- Go to ./cross-border-payment-api folder
- Run in terminal `npm install nodemon -g`
- Run in terminal `npm install truffle -g`
- Run in terminal `npm install`
- In another terminal of same directory, run ```ganache-cli```
- Go back to the previous terminal and run ```truffle compile``` to compile contract
- Then run ```npm run besu```
- Then run ```truffle migrate --network besu``` to create migrations to deploy migrations and wallet on besu network
- Then run ```truffle test --network besu```
- Then run `npm start`
- Navigate to https://localhost:3333

### Install openzeppelin dependency
```$ npm install @openzeppelin/contracts```
<a href="https://www.npmjs.com/package/@openzeppelin/contracts#:~:text=Sign%20In-,%40openzeppelin/contracts,-4.8.1%C2%A0%E2%80%A2%C2%A0
">openzeppelin/contract doc</a>
