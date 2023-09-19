// Exercise #2: Editing Employee Array
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
// Start coding here
let alex = employees[1]['name'];
employees[1]['hobbies'].push("Watching basketball");
let alexHobbies = employees[1]['hobbies'];
let alexAndJamesAge = employees[0]['age'] + employees[1]['age'];



const updateEmployees = employees;



updateEmployees[0]['name'] = "Alicia";
updateEmployees[0]['age'] = 29;
updateEmployees[0]['hobbies'] = ["Shopping", "Reading novels"];

updateEmployees[1]['name'] = "Kody";
updateEmployees[1]['age'] = 19;
updateEmployees[1]['hobbies'] = ["Computer games", "Wakeboard"];

//ลบ Object ของพนักงานที่ชื่อ “Kody” ใน updateEmployees
updateEmployees.pop();

console.log(employees);
console.log(updateEmployees);



