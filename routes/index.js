'use strict';

const express = require('express');
const router = express.Router();
const todos = require('../models/todos');

module.exports = router;

// write your routes here. Feel free to split into multiple files if you like.
//comes with todos:

router.get('/users', (req, res, next) => {
  let users = todos.listPeople();
  res.json(users);
  next();
});

router.get('/users/:name/tasks', (req, res, next) => {
  let tasks = todos.list(req.params.name);
  if (tasks === undefined) res.status(404);
  if (req.query.status === 'complete') {
    tasks = tasks.filter((task) => {return task.complete});
  } else if (req.query.status === 'active') {
    tasks = tasks.filter((task) => {return !task.complete});
  }
  res.json(tasks);
  next();
});

router.post('/users/:name/tasks', (req, res, next) => {
  let valid = (Object.keys(req.body).every((el) => {
    return el === 'complete' || el === 'content'
  }));
  if (!valid) res.status(400).send();
  else {
    let newTask = todos.add(req.params.name, req.body);
    res.status(201);//must set the status before sending the json response
    res.json(newTask);
    res.send();
  }
  next();
});
router.put('/users/:name/tasks/:index', (req, res, next) => {
  let tasks = todos.complete(req.params.name, Number(req.params.index))
  res.status(200).send();
  next();
});
router.delete('/users/:name/tasks/:index', (req, res, next) => {
  let remainingTasks = todos.remove(req.params.name, Number(req.params.index));
  res.status(204).send();
  next();
})

// todos comes with the following functions:
//{reset(), listPeople(), add(name,task), list(name), complete(name, index), remove(name,index)}

//router.get('/users/:name/tasks'), (req, res, next) => {
// does several things:
// initially returns an empty array of tasks for the requested person
// filter this list by whatever is passed in through the params and/or query
// manually set the response status to 404 if the person requested is not in the list
// send the response back in json format
//})

//router.post('/users/:name/tasks', (req, res, next) => {
//  post a new task for a user only if the post is valid
//  send the response back as json
//  manually set the response status to 201 if successful
//  otherwise set the status to 400
//  must end off with a response.send if the post was not successful.
//})

// router.put('/users/:name/tasks/:index', (req, res, next) => {
// change the status to complete for a task of index given in the request
// manually set the status of 200 back on success
// also send the response back to the server
// })

// router.delete('/users/:name/tasks/:index', (req, res, next) => {
// remove the task with requested index for a user
// manually set the response status to 204 on success
// send back to the server
// })
