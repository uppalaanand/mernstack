# Backend & Authentication Notes

# Today's Topics

1. Projections  
2. Unique Properties  
3. Saving Password  
4. Authentication  
5. Public & Protected Routes  

---

# Important Point

Validators run before inserting or updating data in database.

If validation fails:
```text
Data will not be inserted or updated
```

For update operations validators do not run by default.

To enable validators:

```javascript
runValidators: true
```

---

# Error Handling in Express

Express uses default error handling middleware functions.

These middleware functions handle errors automatically.

---

# Projections

Projection means retrieving only required fields from database.

Also called:
```text
Field Level Filtering
```

Used with:
- find()
- findOne()

### Example

```javascript
User.find({}, { name: 1, age: 1 })
```

or

```javascript
User.find({}, "name age")
```

---

# Unique Properties

Used to make field values unique in collection.

### Example

```javascript
email: {
  type: String,
  unique: true
}
```

---

# Saving Password

Never save passwords in plain text.

Two methods:

## Hashing
- One way process
- Cannot reverse back
- Secure

## Encryption
- Reversible
- Uses secret key
- Not recommended

We use:
```text
bcrypt.js
```

Usually hashing rounds:
```text
8 to 12
```

---

# Authentication

Authentication means verifying user identity.

Every API has:

## Public Routes
Accessible by everyone.

## Protected Routes
Accessible only by authenticated users.

---

# Authentication Flow

1. User sends credentials  
2. API checks username  
3. API checks password  
4. Server generates token  
5. Token sent to user  

Once user gets token:
```text
User is Authenticated
```

---

# JWT Authentication

After login:
- Server generates JWT token
- User stores token
- Token sent with future requests

---

# Token Storage

## Local Storage
Vulnerable to:
```text
XSS Attacks
```

## Cookies
Vulnerable to:
```text
CSRF Attacks
```

Safest way:
```text
httpOnly + secure cookies
```

### Advantages
- Client-side JS cannot access cookies
- More secure

---

# Authentication vs Authorization

## Authentication
Verifying identity.

## Authorization
Checking access permissions.

Authentication happens before authorization.

---

# Authenticated Requests

After login:
- Browser automatically sends cookie
- Middleware extracts token
- JWT token gets verified

Libraries used:
```text
cookie-parser
```

---

# Aggregation Pipeline

Used for:
- Data analysis
- Data transformation

Stages:

```text
$match
$group
$sort
$project
$limit
$skip
```

---

# populate() in Mongoose

Used to fetch referenced documents.

Acts like:
```text
JOIN operation
```

---

# Password Traps in Mongoose

Only password should be hashed.

`unique` is not a validator, it is an option.

Recently newer versions allow custom unique error messages.

---

# Blog App Roles

## Admin
- Login
- View Articles
- Block/Unblock Users

## User
- Register
- Login
- View Articles
- Write Articles

## Author
- Register
- Login
- Add Articles
- Edit Articles
- Delete Articles

---

# Function Declaration vs Expression

## Function Declaration

```javascript
function test() {}
```

## Function Expression

```javascript
const test = function() {}
```

---

# Database Architecture

Most important part of application.

Before starting project:
- Design collections
- Design documents
- Design relationships

### Steps

1. Identify entities  
2. Identify relationships  
3. Identify fields  

---

# Topics Covered

- Projections
- Unique Fields
- Password Hashing
- Authentication
- JWT
- Cookies
- Protected Routes
- Aggregation Pipeline
- populate()
- Roles
- Database Architecture