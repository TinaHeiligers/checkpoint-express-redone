'use strict';

const express = require('express');
const router = express.Router();
module.exports = router;

// write your routes here. Feel free to split into multiple files if you like.
//comes with todos:
//{reset(), listPeople(), add(name,task), list(name), complete(name, index), remove(name,index)}

//router.get('/users/:name/tasks', function(req, res, next) {
// does several things:
// initially returns an empty array of tasks for the requested person
// filter this list by whatever is passed in through the params and/or query
// manually set the response status to 404 if the person requested is not in the list
// send the response back in json format
//})

//router.post('/users/:name/tasks', fucntion(req, res, next) {
//  post a new task for a user only if the post is valid
//  send the response back as json
//  manually set the response status to 201 if successful
//  otherwise set the status to 400
//  must end off with a response.send if the post was not successful.
//})

// router.put('/users/:name/tasks/:index', function(req, res, next) {
// change the status to complete for a task of index given in the request
// manually set the status of 200 back on success
// also send the response back to the server
// })

// router.delete('/users/:name/tasks/:index', function(req, res, next) {
// remove the task with requested index for a user
// manually set the response status to 204 on success
// send back to the server
// })
