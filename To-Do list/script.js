
function addTask() {

  var task = document.getElementById("task");
  var taskvalue = task.value.trim();

  if (taskvalue === "") {
    alert("Please enter a task!");
    return;
  }


  var li = document.createElement("li");
   var textNode = document.createTextNode(taskvalue);
li.appendChild(textNode);

  var checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  li.appendChild(checkbox);

  var deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.className = "delete";
  li.appendChild( deleteButton);


  document.getElementById("list").appendChild(li);

  
  task.value = "";


  checkbox.onclick = function() {
    if (checkbox.checked) {
      li.style.textDecoration = "line-through";
    } else {
      li.style.textDecoration = "none";
    }
  };

   deleteButton.onclick = function() {
    li.remove();
  };
}
