# Miibah

## Project Description:
  Miibah is an application that gives users a fun and friendly interface to keep track of their Amiibo collection with. When using Miibah, a user can either save Amiibos to a wishlist or a list of collected Amiibos if they already own it. 

## Getting Started:
Follow the instructions below to install the app:

Create a local project folder:
```
mkdir miibah
```
Clone the following link within this directory:
```
$ git clone https://github.com/shannonmoranetz/trapper-keeper-ui
```
Install the required node modules: 
```
$ npm install
```
Start the server with this command:
```
$ npm start
```

## Project Development Notes:
This project tested my knowledge of Redux, Redux testing, and React. It taught me how to fetch data from an api in an optimal manner by taking advantage of Redux's global store.
The external api used was studied thoroughly beforehand to ensure best fetching practices in implementation. Additionally, I achieved a much better understanding of React Router's prop objects and used them to simplify several pieces of otherwise complicated logic. 

## Future Development and Extensions:
In a future refactor, I would like to remove several items from the Redux store. I would also like to add functionality to filter amiibos by their game series on the homepage.