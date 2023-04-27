require('dotenv').config({ path: '.env' });
const express = require('express');
const database = require('../db/database');

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 8080;
  }

  listen() {
    database.connect().then(() => {
      this.app.listen(this.port, () => {
        console.log(`Server listening on port ${this.port}`);
      });
    });
  }
}

module.exports = Server;
