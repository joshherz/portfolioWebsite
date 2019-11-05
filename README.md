# 1. joshherz.com
>A website to host projects made by me, Josh Herz. By originality of my website name, josherz.com, you can tell I'm the real think-outside-the-box type.

SKIP TO [1.4.1. How to Run This Code](#141-how-to-run-this-code) if you're the TL;DR type.

## 1.2. Table of Contents
<!-- TOC -->
- [1. OchemXR](#1-OchemXR)
  - [1.2. Table of Contents](#12-table-of-contents)
  - [1.3. Overview](#Overview)
  - [1.4. Usage](#13-usage)
    - [1.4.1. API endpoints](#131-api-endpoints)
    - [1.4.2. Component](#132-component)
  - [1.4. Development Setup](#14-development-setup)
  - [1.5. Development Setup](#14-development-setup)
- [2. Development Log](#development)
<!-- /TOC -->


## 1.3. Overview
**What kind of projects do you work on?**

I tried to marry my love for VR with my skills for webDev with the newly released webXR api.
On my website, you'll find an assortment of webXR, react360, and webAR apps.

## 1.4. Usage

To run this code locally, follow the steps below.

### 1.4.1. How to Run This Code
1. Make sure you have Node installed for the npm commands you will run in step 4. (For installation, see https://nodejs.org/en/)
2. Make sure MongoDB is running locally (For installation and running MongoDB, see https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/#run-mongodb)
3. Clone this repo
4. Open terminal in the cloned folder,
   - To install dependencies, run ```  npm install  ```
   - To run MongoDB, ``` mongod --config /usr/local/etc/mongod.conf ``` (run in a 2nd terminal tab/window)
   - To run this app for development, run ```  npm run dev  ```
5. Open [localhost:8081](http://localhost:8081/) in the browser

### 1.4.2. API endpoints
- `GET ______` 
  - returns data from entry with specified id
- `POST ________` 
  - pushes a new entry to the database
- `PUT _______`
  - edits entry 
- `DELETE ______` 
  - removes entry with specified id from database


### 1.4.3. Dependency Requirements
- Node 6.13.0
These dependencies will be added to your auto-created node_modules folder when you run "npm install" command in your cloned folder in the terminal 
- React
- React-DOM
- React360 framework
- MongoDB
- express
- body-parser
- cors
- mongodb
- mongoose
- webpack
- docker
- http-server
- etc



