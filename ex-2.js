let employees = [
  {
    name: "James",
    age: 40,
    hobbies: ["Football", "Social media"],
  },
  {
    name: "Alex",
    age: 25,
    hobbies: ["Cryptocurrency", "Social media"],
  },
];

// Start coding here

console.log(employees[1]);
employees[1].hobbies.push("Watching basketball");
console.log(employees[1].hobbies);
console.log(employees[0].age + employees[1].age);

let newEmployee1 = {
  name: "Alicia",
  age: 29,
  hobbies: ["Shopping", "Reading novels"],
};

let newEmployee2 = {
  name: "Kody",
  age: 19,
  hobbies: ["Computer games", "Wakeboard"],
};

employees.push(newEmployee1);
employees.push(newEmployee2);

console.log(employees);

employees.pop();

console.log(employees);
