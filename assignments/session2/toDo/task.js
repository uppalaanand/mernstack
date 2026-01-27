// ii. task.js - Task operations
//                     // TODO: Import validator functions
//                     // import { ... } from './validator.js';
                    
//                     const tasks = [];
                    
//                     // 1. Add new task
//                     function addTask(title, priority, dueDate) {
//                       // Validate using imported functions
//                       // If valid, add to tasks array
//                       // Return success/error message
//                     }
                    
//                     // 2. Get all tasks
//                     function getAllTasks() {
//                       // Return all tasks
//                     }
                    
//                     // 3. Mark task as complete
//                     function completeTask(taskId) {
//                       // Find task and mark as complete
//                     }

//                   // Export functions

import { validateTitle, validatePriority, validateDueDate } from "./validator.js";

const tasks = [];
let taskId = 0;
// 1. Add new task
export function addTask(title, priority, dueDate) {
    // Validate using imported functions
    if(!validateDueDate(dueDate) && !validatePriority(priority) && !validateTitle(title)) {
        // If valid, add to tasks array
        return "Resolve the requirements";
    }
    tasks.push({taskId: ++taskId , title, priority, dueDate, isCompleted: false});
    return "Task added successfully";
}

// 2. Get all tasks
export function getAllTasks() {
    // Return all tasks
    return tasks;
}

// 3. Mark task as complete
export function completeTask(taskId) {
    // Find task and mark as complete
    tasks.filter((task) => task.taskId === taskId ? task.isCompleted = true : taskId);
}



