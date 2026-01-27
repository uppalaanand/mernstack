// iii. app.js - Main application
//                   // TODO: Import task functions
//                   // import { ... } from './task.js';
//                   // Test your module system
//                   // 1. Add some tasks
//                   // 2. Display all tasks
//                   // 3. Complete a task
//                   // 4. Display all tasks again

import {getAllTasks, addTask, completeTask} from './task.js'

// 1. Add some tasks
addTask("Wake Up Early", "high", Date(22,1,2026));
addTask("Wake Up Early", "high", Date(20,1,2026));

// 2. Display all tasks
let tsk = getAllTasks()
tsk.map((task) => console.log(task));

// 3. Complete a task
completeTask(1);

// 4. Display all tasks again
let task = getAllTasks()
task.map((task) => console.log(task));