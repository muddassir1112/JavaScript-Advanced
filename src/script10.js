"use strict"
function myFunction() {
    class Employee {
      constructor(id, name, totalSalary) {
        this.id = id;
        this.name = name;
        this.totalSalary = totalSalary;
      }
    }
    let obj1 = new Employee(1, "John", 30000);
    let obj2 = new Employee(2, "Mark", 30000);
    let obj3 = new Employee(3, "Yash", 30000);
    var arr = [];
    arr.push(obj1);
    arr.push(obj2);
    arr.push(obj3);
    let str = JSON.stringify(arr);
    var obj = JSON.parse(str);
    var html = "<table><tr><th>ID</th><th>Name</th><th>Total Salary</th></tr>";
    obj.forEach((element) => {
      html +=
        "<tr><td>" + element.id + "</td><td>" + element.name + "</td><td>" + element.totalSalary + "</td></tr>" 
    });
    html += "</table>";
    document.getElementById('demo').innerHTML = html;
   
  };