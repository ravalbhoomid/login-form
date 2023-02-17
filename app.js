seletedRow = null;
let m = 1;
function onFormSubmit() {
  event.preventDefault();
  let formData = readFormData();

  if (
    formData.name.trim().length >= 1 &&
    formData.type.trim().length >= 1 &&
    formData.description.trim().length >= 1
  ) {
    if (seletedRow === null) {
      insertNewRecord(formData);
    } else {
      updateRecord(formData);
    }
  }

  resetForm();
}

function readFormData() {
  let formData = {};
  //   formData["recipeNo"] = document.getElementById("recipeNo").value;
  formData["name"] = document.getElementById("name").value;
  formData["type"] = document.getElementById("type").value;
  formData["description"] = document.getElementById("description").value;
  return formData;
}

function insertNewRecord(data) {
  var table = document
    .getElementById("storeList")
    .getElementsByTagName("tbody")[0];
  var newRow = table.insertRow(table.length);
  var cell1 = newRow.insertCell(0);
  // const random = Math.floor(Math.random() * 100);

  cell1.innerHTML = m;
  m++;
  var cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.name;
  var cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.type;
  var cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.description;
  var cell5 = newRow.insertCell(4);
  cell5.innerHTML = `<button onClick='onEdit(this)' class="btn btn-success ps-3 pe-3 pt-1 pb-1 m-2" style="box-shadow: 2px 2px 2px #fffdfd">Edit</Button> <button onClick='onDelete(this)' class="btn btn-danger ps-3 pe-3 pt-1 pb-1 m-2" style="box-shadow: 2px 2px 2px #fffdfd;">Delete</button>`;
}

function onEdit(edit) {
  seletedRow = edit.parentElement.parentElement;
  // document.getElementById("recipeNo").value = seletedRow.cells[0].innerHTML;
  document.getElementById("name").value = seletedRow.cells[1].innerHTML;
  document.getElementById("type").value = seletedRow.cells[2].innerHTML;
  document.getElementById("description").value = seletedRow.cells[3].innerHTML;
}

function updateRecord(formData) {
  // seletedRow.cells[0].innerHTML = formData.recipeNo;
  seletedRow.cells[1].innerHTML = formData.name;
  seletedRow.cells[2].innerHTML = formData.type;
  seletedRow.cells[3].innerHTML = formData.description;
  seletedRow = null;
}

function onDelete(deleteData) {
  if (confirm("Do you want to delete this record?")) {
    row = deleteData.parentElement.parentElement;
    document.getElementById("storeList").deleteRow(row.rowIndex);
  }
  resetForm();
}

function resetForm() {
  // document.getElementById("recipeNo").value = "";
  document.getElementById("name").value = "";
  document.getElementById("type").value = "";
  document.getElementById("description").value = "";
}
