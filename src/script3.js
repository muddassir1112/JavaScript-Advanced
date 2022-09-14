class Employee {
  constructor(id, name, totalSalary) {
    this.id = id;
    this.name = name;
    this.totalSalary = totalSalary;
  }
}
function myFunction() {
  let emp = new Employee(1, "John", 8000); //Employee being a class name
  let js = JSON.stringify(emp);
  document.getElementById("demo").innerHTML = js;
}
