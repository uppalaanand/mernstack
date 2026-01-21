// i. validator.js - Input validation
//                       // TODO: Export these validation functions
                      
//                       // 1. Validate task title (not empty, min 3 chars)
//                       function validateTitle(title) {
//                         // Your code here
//                       }
                      
//                       // 2. Validate priority (must be: low, medium, high)
//                       function validatePriority(priority) {
//                         // Your code here
//                       }
                      
//                       // 3. Validate due date (must be future date)
//                       function validateDueDate(date) {
//                         // Your code here
//                       }

export function validateTitle(title) {
    if(title.length === 0) {
        return "Title is empty";
    }
    if(title.length >= 3) {
        return "Length must be atleast 3";
    }
    return true;
}

export function validatePriority(priority) {
    return ["low", "medium", "high"].includes(priority) ? true : false;
}

export function validateDueDate(date) {
    let today = new Date();
    console.log(Date(today.getDate(), today.getMonth(), today.getFullYear()));
    // console.log(date)
    if(date < Date(today.getDate(), today.getMonth(), today.getFullYear())) {
        return "Enter future date";
    }
    return true;
}