# Social-Network-DP

## Table of Contents

  
- [Social-Network-DP](#social-network-dp)
  - [Table of Contents](#table-of-contents)
  - [Description](#description)
  - [User Story](#user-story)
  - [Acceptance Criteria](#acceptance-criteria)
  - [Testing](#testing)
  - [Installation](#installation)
  - [Walkthrough Video](#walkthrough-video)
  - [Submission](#submission)
  - [Author](#author)
  - [Questions](#questions)

## Description

This is an API for a social network application where a user can join with a username and email address.  When the user joins, they can become friends with other members and also share their thoughts and/or reactions to those thoughts with other members.  It employs a MongoDB database for the data, Express.js for routing, and moment to format time stamps.


## User Story

AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data.

## Acceptance Criteria

GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list.

## Testing

Testing in Insomnia Core is used to make sure the routes are working correctly.  We are testing the API GET, POST, PUT and DELETE routes to see that we are successfully able to view, add, modify and remove users, friends, thoughts and reactions from the application.

Testing is not compete until all routes and methods are working correctly and the results of the data are returned in a formatted JSON.

## Installation

This repository will not be deployed.  If the user wanted to run it, the following 
steps need to be completed.

Clone this repository to your local computer

You must have node.js, express.js, mongoDB installed and have either mongo compass or insomnia installed for testing.  Then run the following commands:

                                                                                  
 `- npm init -y`                                     
 `- npm install express`                             
 `- npm install mongoose`                           
 `- npm install moment`   

 Then start the server by running:

 `-npm start`  
 
## Walkthrough Video

[Walk-through video link](https://drive.google.com/file/d/1BeiVMRHMWhUo1oVZi4lY3CXP47G3JSEZ/view)

## Submission

[Github Repo](https://github.com/Dpro03/Social-Network-DP.git)

## Author

David Proto<br>
[My Github Page](https://github.com/Dpro03)
## Questions

Email me at:
dpro308@gmail.com



                                                                                 

