'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const router = require('./routes');
module.exports = app; // this line is only used to make testing easier.

// remember to plug in your router and any other middleware you may need here.
app.use(bodyParser.json());
app.use(router);

if (!module.parent) app.listen(3000); // conditional prevents a very esoteric EADDRINUSE issue with mocha watch + supertest + npm test.

// did not need any logging middleware (volleyball or morgan)
// had to add in router, and some boilerplate for bodyParser.
