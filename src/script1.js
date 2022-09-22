var data = [];
function add() {
  let id = document.getElementById("id").value;
  let name = document.getElementById("name").value;
  let salary = document.getElementById("salary").value;
  var val = {
    ID: id,
    Name: name,
    Salary: salary,
  };
  if(val.ID == "" && val.Name == "" && val.Salary == "")
  {
    alert("Fields are mandatory");
  }
  else if(val.ID == ""){
    alert("Please enter Id");
  }
  else if(val.Name == ""){
    alert("Please enter name");
  }
  else if(val.Salary == ""){
    alert("Please enter Salary");
  }
  else{
  data.push(val);
  display();
}
}
function display() {
  var table =
    "<table><tr><th>ID</th><th>Name</th><th>Salary</th><th>Action</tr>";
  data.forEach((element) => {
    table +=
      "<tr><td>" +
      element.ID +
      "</td><td>" +
      element.Name +
      "</td><td>" +
      element.Salary +
      "</td><td><a href='#' onclick=deleteRow('"+element.ID+ "')>Delete</td></tr>";
  });
  table += "</table>";
  document.getElementById("demo").innerHTML = table;
}
function deleteRow(val){
    for(var i=0; i< data.length ; i++){
        if (val == data[i].ID){
            data.splice(i,1);
        }
    }
    display();
}