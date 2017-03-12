'use strict';

let tasks = {}; // a place to store tasks by person

module.exports = {
  reset: () => {
    tasks = {}; // (this function is completed for you.)

  },
  // ==== COMPLETE THE FOLLOWING (SEE `model.js` TEST SPEC) =====
  listPeople: () => {
    return Object.keys(tasks);
  },
  add: (name, task) => {
    if (!tasks[name]) tasks[name] = [];
    if (!task.complete) task.complete = false;
    tasks[name].push(task);
    return task;
  },
  list: (name) => {
    return tasks[name];
  },
  complete: (name, index) => {
    tasks[name][index].complete = true;
  },
  remove: (name, index) => {
    let firstTasks = tasks[name].slice(0,index);
    let lastTasks = tasks[name].slice(index+1);
    return tasks[name] = firstTasks.concat(lastTasks)
  }
};

//I used a data structure of the form:
//tasks = {
//  'zeke' : [{content: 'clean room'},{content: 'write mom'}],
//  'omri' : [{content: 'exercise'}]
//}
// this is to take care of multiple tasks for a single user.
