# 🚀 ES6 Features

## 📌 Introduction

ES6 (ECMAScript 2015) is a major update to JavaScript that introduced many modern features, making code cleaner, shorter, and easier to maintain.

---

# 📚 ES6 Features Covered

- let and const
- Arrow Functions
- Template Literals
- Destructuring
- Spread Operator (...)
- Rest Operator (...)
- Default Parameters
- Enhanced Object Literals
- Classes
- Modules (Import & Export)
- Promises
- for...of Loop
- Map
- Set
- Optional Chaining
- Nullish Coalescing Operator

---

# 1️⃣ let and const

### let
Used for variables that can change.

```javascript
let age = 20;
age = 21;
console.log(age);
```

### const
Used for values that never change.

```javascript
const PI = 3.14;
```

---

# 2️⃣ Arrow Functions

Old Way

```javascript
function greet(name){
    return "Hello " + name;
}
```

ES6

```javascript
const greet = (name) => {
    return `Hello ${name}`;
};
```

Short Form

```javascript
const square = num => num * num;
```

---

# 3️⃣ Template Literals

Old

```javascript
let name = "Aryan";
console.log("Hello " + name);
```

New

```javascript
let name = "Aryan";
console.log(`Hello ${name}`);
```

Supports multi-line strings.

---

# 4️⃣ Destructuring

Array

```javascript
const colors = ["Red", "Blue", "Green"];

const [a, b] = colors;

console.log(a);
```

Object

```javascript
const user = {
    name: "Aryan",
    age: 21
};

const {name, age} = user;
```

---

# 5️⃣ Spread Operator (...)

Copies arrays or objects.

```javascript
const arr1 = [1,2,3];

const arr2 = [...arr1,4,5];

console.log(arr2);
```

Objects

```javascript
const user = {
    name:"Aryan"
};

const details = {
    ...user,
    city:"Pune"
};
```

---

# 6️⃣ Rest Operator (...)

Collects multiple values.

```javascript
function sum(...numbers){
    return numbers.reduce((a,b)=>a+b);
}

console.log(sum(1,2,3,4));
```

---

# 7️⃣ Default Parameters

```javascript
function greet(name="Guest"){
    console.log(`Hello ${name}`);
}

greet();
```

---

# 8️⃣ Enhanced Object Literals

```javascript
const name = "Aryan";
const age = 21;

const user = {
    name,
    age
};

console.log(user);
```

---

# 9️⃣ Classes

```javascript
class Student{

    constructor(name){
        this.name = name;
    }

    display(){
        console.log(this.name);
    }

}

const s1 = new Student("Aryan");

s1.display();
```

---

# 🔟 Modules

Export

```javascript
export const name = "Aryan";
```

Import

```javascript
import {name} from "./file.js";
```

---

# 1️⃣1️⃣ Promises

```javascript
const promise = new Promise((resolve,reject)=>{

    resolve("Success");

});

promise.then(result=>{

    console.log(result);

});
```

---

# 1️⃣2️⃣ for...of Loop

```javascript
const arr = [10,20,30];

for(const value of arr){
    console.log(value);
}
```

---

# 1️⃣3️⃣ Map

```javascript
const map = new Map();

map.set("name","Aryan");

console.log(map.get("name"));
```

---

# 1️⃣4️⃣ Set

```javascript
const nums = new Set([1,2,2,3,4]);

console.log(nums);
```

Duplicates are automatically removed.

---

# 1️⃣5️⃣ Optional Chaining

```javascript
const user = {};

console.log(user.address?.city);
```

No error if the property doesn't exist.

---

# 1️⃣6️⃣ Nullish Coalescing Operator

```javascript
const name = null;

console.log(name ?? "Guest");
```

Output

```
Guest
```

---

# 🎯 Advantages of ES6

- Cleaner syntax
- Better readability
- Faster development
- Easier debugging
- Supports modular programming
- Improves code maintainability
- Widely used in React, Node.js, and modern JavaScript projects

---

# 📖 What I Learned

- Modern JavaScript syntax
- Writing shorter and cleaner code
- Using arrow functions
- Working with objects and arrays efficiently
- Understanding promises
- Creating reusable modules
- Writing production-ready JavaScript

---

# 🛠 Technologies Used

- JavaScript (ES6)
- VS Code
- Chrome Browser

---

# 🎯 Conclusion

ES6 introduced powerful features that make JavaScript more readable, maintainable, and efficient. Learning ES6 is essential before moving to React.js, Node.js, Express.js, and other modern JavaScript frameworks.

⭐ Keep Learning • Keep Building • Keep Coding 🚀
