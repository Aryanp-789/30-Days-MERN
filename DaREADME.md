# 🚀 Day 3 - JavaScript ES6+ | 30 Days MERN Challenge

Welcome to **Day 3** of my **30 Days MERN Stack Challenge**.

Today, I learned the most important **JavaScript ES6+ features**, which are widely used in modern web development and are essential for learning React.

---

# 📚 Topics Covered

## 1. let, const and var
- Difference between `var`, `let`, and `const`
- Block Scope
- Function Scope
- Reassignment
- Variable Declaration Best Practices

---

## 2. Arrow Functions
Learned how to write shorter and cleaner functions using arrow syntax.

Example:
```javascript
const greet = (name) => {
    return `Hello ${name}`;
};
```

---

## 3. Template Literals

Used backticks (` `) to create dynamic strings.

Example:

```javascript
const name = "Aryan";
console.log(`Hello ${name}`);
```

---

## 4. Object Destructuring

Extract values directly from objects.

Example:

```javascript
const user = {
    name: "Aryan",
    age: 21
};

const { name, age } = user;
```

---

## 5. Array Destructuring

Extract elements from arrays easily.

Example:

```javascript
const colors = ["Red", "Blue", "Green"];

const [first, second] = colors;
```

---

## 6. Spread Operator (...)

Used to copy or merge arrays and objects.

Example:

```javascript
const numbers = [1, 2, 3];

const newNumbers = [...numbers, 4, 5];
```

Object Example:

```javascript
const user = {
    name: "Aryan"
};

const updatedUser = {
    ...user,
    age: 21
};
```

---

## 7. Rest Operator (...)

Collected multiple function arguments into an array.

Example:

```javascript
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
```

---

## 8. Default Parameters

Provided default values for function parameters.

Example:

```javascript
function greet(name = "Guest") {
    console.log(`Hello ${name}`);
}
```

---

## 9. Array Methods

Practiced commonly used array methods:

- map()
- filter()
- find()
- forEach()
- reduce()

Example:

```javascript
const numbers = [1, 2, 3, 4];

const squares = numbers.map(num => num * num);
```

---

## 10. ES6 Modules

Learned how to export and import JavaScript modules.

Example:

```javascript
export const name = "Aryan";

import { name } from "./file.js";
```

---

# 💻 Practice Programs

- Variable Declaration
- Arrow Functions
- Template Literals
- Object Destructuring
- Array Destructuring
- Spread Operator
- Rest Operator
- Default Parameters
- Array Methods
- Module Import & Export

---

# 🛠 Mini Project

## Student Result Manager

### Features

- Store multiple students
- Display all students
- Calculate total marks
- Calculate average marks
- Find topper
- Show passed students
- Show failed students
- Search student by name

---

# 📂 Folder Structure

```
Day-03-JavaScript-ES6/
│
├── index.html
├── script.js
└── README.md
```

---

# 🎯 Learning Outcome

By completing Day 3, I can now:

- Write cleaner JavaScript using ES6 syntax.
- Use arrow functions effectively.
- Work with objects and arrays using destructuring.
- Copy and merge data using spread operators.
- Handle unlimited function parameters using rest operators.
- Use modern array methods for data manipulation.
- Organize JavaScript code using modules.
- Build small JavaScript projects using ES6 features.

---

# 🧠 Key Takeaways

- `const` is preferred unless reassignment is needed.
- Arrow functions provide shorter syntax.
- Template literals make string formatting easier.
- Destructuring improves code readability.
- Spread and Rest operators simplify working with arrays and objects.
- Array methods reduce the need for traditional loops.
- ES6 Modules make code modular and reusable.

---

# 🚀 What's Next?

**Day 4:** DOM Manipulation & Events

- Selecting HTML elements
- Changing content dynamically
- Event Listeners
- Forms
- DOM Projects

Stay tuned for Day 4!

---

## 👨‍💻 Author

**Aryan Patil**

30 Days MERN Stack Challenge 💙

> *Consistency beats perfection. Every day of practice brings me one step closer to becoming a MERN Stack Developer.*
