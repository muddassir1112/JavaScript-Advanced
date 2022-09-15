var data=[];
function add() {
    let id = document.getElementById("id").value;
    let name = document.getElementById("name").value;
    let salary = document.getElementById("salary").value;
    try{
  if(name == "") throw "Empty field not allow in Name field"
  if(!isNaN(name))throw "Number not required in Name Field"
    var val = {
      ID: id,
      Name: name,
      Salary: salary,
    };
    data.push(val);
  
    display();
  
  }
  catch(err){
    document.getElementById('demo1').innerHTML= err;
  }
}
  function display() {
    var table =
      "<table><tr><th>ID</th><th>Name</th><th>Salary</th>";
    data.forEach((element) => {
      table +=
        "<tr><td>" +
        element.ID +
        "</td><td>" +
        element.Name +
        "</td><td>" +
        element.Salary +
        "</td><td>";
        
    });
    table += "</table>";
    document.getElementById("demo").innerHTML = table;
  }