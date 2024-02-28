var listOfActivities = [];
var input = document.getElementById("input");
var todolist = document.getElementById("todolist");
document.getElementById("button").onclick = click;

function click() {
  listOfActivities.push(input.value);
  console.log(listOfActivities);
  //Using push array operation to add the input todo activity to the list created earlier.
  input.value = "";
  // Giving Empty string to input value after pushing it to array
  showList();
}

function showList() {
  //Using innerHTML DOM property to set HTML , giving empty string initially
  todolist.innerHTML = " ";
  //To display each to-do activity from the list using innerHTML property.
  listOfActivities.forEach(function (n, i) {
    todolist.innerHTML +=
      "<li>" +
      n +
      "<a onclick='editItem(" +
      i +
      ")'>Edit</a>" +
      "<a onclick='deleteItem(" +
      i +
      ")'>&times | </a></li>";
  });
}

function deleteItem(i) {
  // Using splice array operations to remove one item at specified index
  listOfActivities.splice(i, 1);
  // Display the todo list
  showList();
}

function editItem(i) {
  //Using prompt to get the new value of the activty after editing
  var newValue = prompt("Insert new value");
  // Using splice array operation to remove the previous activity and add the new activity
  listOfActivities.splice(i, 1, newValue);
  //Display the list
  showList();
}