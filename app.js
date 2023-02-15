row = null;

function onFormSubmit() {
  var formData = readFormData();
  if (row == null) {
    InsertNewRecord(formData);
  } else {
    update(formData);
  }
  //   InsertNewRecord(formData);
  resetForm();
}

function readFormData() {
  var formData = {};
  formData["id"] = document.querySelector("#id").value;
  formData["name"] = document.querySelector("#name").value;
  formData["type"] = document.querySelector("#type").value;
  formData["description"] = document.querySelector("#description").value;
  return formData;
}

function InsertNewRecord(data) {
  var table = document
    .getElementById("recipeList")
    .getElementsByTagName("thead")[0];
  var newRow = table.insertRow(table.length);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.id;
  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.name;
  cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.type;
  cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.description;
  cell5 = newRow.insertCell(4);
  cell5.innerHTML = `<button onClick='onEdit(this)'>Edit</button>
  <button onClick='onDelete(this)'>Delete</button>`;
}

function resetForm() {
  document.querySelector("#id").value = "";
  document.querySelector("#name").value = "";
  document.querySelector("#type").value = "";
  document.querySelector("#description").value = "";
}

function onEdit(td) {
  row = td.parentElement.parentElement;
  document.querySelector("#id").value = row.cells[0].innerHTML;
  document.querySelector("#type").value = row.cells[1].innerHTML;
  document.querySelector("#name").value = row.cells[2].innerHTML;
  document.querySelector("#description").value = row.cells[3].innerHTML;
}

function onDelete(td) {
  row = td.parentElement.parentElement;
  document.querySelector("#recipeList").deleteRow(row.rowIndex);
}

function update(formData) {
  row.cells[0].innerHTML = formData.id;
  row.cells[1].innerHTML = formData.name;
  row.cells[2].innerHTML = formData.type;
  row.cells[3].innerHTML = formData.description;
}
