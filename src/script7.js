export {id, name, salary};
     const id = "4";
     const name = "Jesse";
     const salary = 10000;

let html = "<table><tr><th>ID</th><th>Name</th><th>Salary</th></tr><tr><td>" + id + "</td><td>" + name + "</td><td>" + salary + "</td></tr></table>"
 document.getElementById('demo').innerHTML = html;

