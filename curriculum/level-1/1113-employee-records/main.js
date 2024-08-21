var employees = []

function Employee(name, jobTitle, salary, status){
    this.name = name
    this.jobTitle = jobTitle
    this.salary = salary
    this.status = "Full Time"
}

Employee.prototype.printEmployeeForm = function(){
    console.log("Name: " + this.name + "," + " Job Title: " + this.jobTitle + "," + " Salary: " + this.salary + "," + " Status: " + this.status)
}

var e1 = new Employee("Eric", "CEO", "$2,000/hr");

e1.status = "Part Time";

e1.printEmployeeForm();

var e2 = new Employee("RylANT", "Chief Breakroom Insect", "0.02/hr");

e2.printEmployeeForm();

var e3 = new Employee("Smithers", "The Creepy Janitor", "5,000/hr");

e3.printEmployeeForm();

var myFunc = function(e1, e2, e3){
    employees.push(e1)
    employees.push(e2)
    employees.push(e3)
}

myFunc (e1, e2, e3)

console.log(employees);