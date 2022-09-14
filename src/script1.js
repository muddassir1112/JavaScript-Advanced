let btnAdd = document.querySelector('button');
let table = document.querySelector('table');

let idInput = document.querySelector('#id');
let nameInput = document.querySelector('#name');
let salaryInput = document.querySelector('#salary');

btnAdd.addEventListener('click', () =>{
let id = idInput.value;
let name = nameInput.value;
let salary = salaryInput.value;
if(id==""&& name=="" && salary==""){
    alert("Enter Values");
}
let template = `<tr>
<td>${id}</td>
<td>${name}</td>
<td>${salary}</td>
<td><button onclick='deleteRow()'>Delete</button></td>
</tr>`
 table.innerHTML += template;
});
function deleteRow()
{
    // for(var i = 1; i < x; i++){
    var x = document.getElementById('rowId');
    x.deleteRow();
}

// deleteRow()

    

    // else
    // {
    // alert("Please Enter Correct Row Id!");
    // }
