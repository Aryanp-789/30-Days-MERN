// Student Information

const student = {
  name: "Aryan Patil",
  college: "Vishwakarma University",
  branch: "Computer Science"
};

// Template Literals
console.log(`Name: ${student.name}`);
console.log(`College: ${student.college}`);
console.log(`Branch: ${student.branch}`);

// Destructuring
const { name, college, branch } = student;

console.log(name);
console.log(college);
console.log(branch);

// Arrow Function
const futureAge = (age) => age + 5;

console.log(`Age after 5 years: ${futureAge(22)}`);

// Spread Operator
const skills = ["HTML", "CSS", "JavaScript"];
const updatedSkills = [...skills, "React"];

console.log(updatedSkills);
