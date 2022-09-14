class Employee{
    constructor (id, name, totalSalary){
        this.id = id;
        this.name = name;
        this.totalSalary = totalSalary;
    }
}
let emp = new Employee(1, 'John', 8000); //Employee being a class name 
let html = "<table><tr><th>ID</th><th>Name</th><th>Total Salary</th></tr><tr><td>"+emp.id+"</td><td>"+emp.name+"</td><td>"+emp.totalSalary+"</td></tr></table>";
document.getElementById('demo').innerHTML = html;