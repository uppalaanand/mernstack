# JavaScript Notes

# Classes in JavaScript

JavaScript supports:
- Object Oriented Programming
- Functional Programming

A class is a blueprint for creating objects.

```javascript
class Student {
  constructor(name) {
    this.name = name;
  }
}
```

React introduced Hooks in version 16.8, so classes became less popular.

In TypeScript classes are commonly used because TS supports OOP concepts.

---

# Function vs Method

## Function
- Called independently
- Defined using function keyword or arrow function

```javascript
function test() {}
```

---

## Method
- Called on object
- Has access to `this`

```javascript
const obj = {
  name: "Ravi",
  greet() {
    console.log(this.name);
  }
}
```

---

# Static Properties in Classes

Ways to initialize static properties:

1. Using `static` keyword  
2. Inside static block  
3. Inside static method  

Static block runs before constructor because it belongs to class itself, not object instance.

---

# Modules in JavaScript

Modules are reusable pieces of code.

---

# Default Export

Can import with any name.

```javascript
export default user;
```

```javascript
import anything from "./file";
```

---

# Named Export

Must import with same name.

```javascript
export const name = "Ravi";
```

```javascript
import { name } from "./file";
```

---

# Optional Chaining

Used to safely access nested properties.

```javascript
student.city?.length
```

---

# Nullish Coalescing Operator

Used to provide default value.

```javascript
student.city?.length ?? "Not Found"
```

---

# Date in JavaScript

JavaScript provides `Date` object.

Date format:

```text
YYYY-MM-DDTHH:mm:ss.sssZ
```

Example:

```javascript
const date = new Date();
```

---

# Date Methods

## Get Methods

```javascript
getFullYear()
getMonth()
getDate()
getHours()
getMinutes()
```

---

## Set Methods

```javascript
setFullYear()
setMonth()
setDate()
setHours()
```

---

# Timestamp

Internally dates are stored as timestamps.

ISO format is only representation.

---

# Copy of Data Types

## Primitive Types

Copied by value.

```javascript
let a = 10;
let b = a;
```

---

## Reference Types

Copied by reference.

```javascript
let obj1 = {name:"Ravi"};
let obj2 = obj1;
```

Both point to same memory.

---

# Shallow Copy vs Deep Copy

## Shallow Copy
Copies only top-level properties.

```javascript
const copy = {...obj};
```

Nested objects still share reference.

---

## Deep Copy

Creates completely separate copy.

```javascript
structuredClone(obj);
```

---

# Error Handling in JavaScript

JavaScript provides built-in `Error` object.

Errors are handled using:

```javascript
try {
  
} catch(err) {
  
}
```

We can also create custom errors using `Error` class.

---

# Topics Covered

- Classes
- Function vs Method
- Static Properties
- Modules
- Default Export
- Named Export
- Optional Chaining
- Nullish Coalescing
- Date Object
- Timestamp
- Shallow Copy
- Deep Copy
- Error Handling