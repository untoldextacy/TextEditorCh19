## JATE (Just Another Text Editor)
# JATE is a Progressive Web Application (PWA) text editor that works both online and offline. The application allows users to take and save notes, and it leverages IndexedDB for storing content on the client side. It’s built using Webpack for bundling the front-end, with Express.js running the back-end server. This app also implements service workers for offline functionality.

## Features
- Offline Functionality: The app works without an internet connection by using IndexedDB and service workers.
- Progressive Web App (PWA): The app can be installed on mobile and desktop devices.
- Text Editing: Users can create, edit, and save notes.
- Service Worker: Implements a service worker for caching assets and enabling offline usage.
- Automatic Saving: Text is automatically saved while the user is editing.

  
## Technologies Used
# Frontend:
- HTML, CSS, JavaScript
- Webpack for bundling
- Service Worker for offline caching
- IndexedDB for data storage
  
# Backend:
- Express.js
- Nodemon for automatic server restarts during development
- Concurrently to run both client and server

  
# Development Tools:
- Babel for JavaScript transpiling
- Webpack for bundling
- Workbox for service worker management
- Webpack Dev Server for local development
- Node.js & npm for package management

- 
## Installation

# Prerequisites

You will need to have the following installed:
```bash
Node.js
npm
```

# Steps to Install

Clone this repository to your local machine:

```bash
Copy code
git clone https://github.com/your-username/JATE.git
cd JATE
```

# Install the dependencies for both the client and server:

```bash
Copy code
npm install
```

# To start the application in development mode:

``` bash
Copy code
npm start
```

# This will run both the Express server and Webpack Dev Server for the client.

# To build the application for production:

```bash
Copy code
npm run build
```

# Usage

After running npm start, the app will be available in your browser at http://localhost:3000.

The app should automatically prompt the user to install it on supported browsers and devices. When the app is installed, users can continue using it offline.

## Contributing
If you'd like to contribute to this project, feel free to fork the repository, submit issues, or open pull requests.

# Steps to Contribute:

```steps
Fork the repository.
Create a new branch for your changes.
Commit your changes with a meaningful message.
Push your changes to your fork.
Submit a pull request to the main repository.
```

License
This project is licensed under the MIT License - see the LICENSE file for details.
