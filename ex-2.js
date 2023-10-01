
const employees = [
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


let alex;
let alexHobbies;
let alexAndJamesAge;
const updateEmployees = [...employees]; 

alex = employees.find((employee) => employee.name === "Alex");


if (alex) {
  alexHobbies = alex.hobbies;
}


if (alex) {
  const james = employees.find((employee) => employee.name === "James");
  if (james) {
    alexAndJamesAge = alex.age + james.age;
  }
}

console.log(alex);
console.log(alexHobbies);
console.log(alexAndJamesAge);
console.log(updateEmployees);
