# JavaScript Basics Notes

# JavaScript

To print output in console:

```javascript
console.log()
```

---

# Data Types in JavaScript

## Primitive Data Types

### Numeric
- Number
- BigInt

### Non Numeric
- String
- Boolean
- Undefined
- Null

---

## Non Primitive Data Types

- Object
- Array
- Function

```text
Everything is an Object in JavaScript
```

---

# Memory in JavaScript

## Stack Memory
Stores:
- Primitive data types

## Heap Memory
Stores:
- Reference data types

Reference variable is stored in stack memory which points to object in heap memory.

---

# Static vs Dynamic Typing

## Statically Typed Languages
- C
- C++
- Java

## Dynamically Typed Language
- JavaScript

---

# Functions in Different Languages

## Java
Contains only methods.

## C
Contains only functions.

## C++
Contains both functions and methods.

## JavaScript
Contains both functions and methods.

---

# Operators in JavaScript

Important operators:

```javascript
=
==
===
```

---

# Arrays in JavaScript

Array is:
- Ordered collection
- Indexed collection

Index starts from:

```text
0
```

Reason:
```text
offset = index * size
```

JavaScript arrays can store heterogeneous data.

---

# Objects in JavaScript

Object is:
- Unordered collection
- Key-value pair collection

Rules:
- Key should be unique
- Value can be duplicate
- Key is always string
- Value can be any datatype

Each key-value pair is called:
```text
Property
```

---

# Exceptions vs Errors

```text
Exceptions can be handled
Errors cannot be handled
```

---

# Array Operations

## push()

Adds element at end.

```javascript
arr.push(10);
```

---

## pop()

Removes element from end.

```javascript
arr.pop();
```

---

## shift()

Removes first element.

```javascript
arr.shift();
```

---

## unshift()

Adds element at beginning.

```javascript
arr.unshift(5);
```

---

## splice()

Used to add/remove elements.

### Add Elements

```javascript
arr.splice(2, 0, 6, 7);
```

### Remove Elements

```javascript
arr.splice(2, 2);
```

---

## slice()

Returns new array.

```javascript
arr.slice(1, 3);
```

---

# Mutable vs Immutable

## Immutable

Primitive data types are immutable.

```javascript
let a = 10;
a = a + 1;
```

New memory gets created.

---

## Mutable

Reference data types are mutable.

Objects and arrays can be modified directly.

---

# Object Destructuring

```javascript
let person = {
  name: "John",
  age: 30,
  city: "New York"
};

let { name, age, city } = person;
```

Variable names should match object keys.

---

# Callback Functions

A callback function is passed as argument to another function.

```javascript
function test(a) {
  console.log(a());
}

test(function () {
  return 123;
});
```

---

# Important While Reading Functions

Always understand:
- Function name
- Parameters
- Return value

Read documentation carefully before using any function.

---

# Topics Covered

- Data Types
- Memory
- Arrays
- Objects
- Operators
- Mutable & Immutable
- Destructuring
- Callback Functions
- Array Methods