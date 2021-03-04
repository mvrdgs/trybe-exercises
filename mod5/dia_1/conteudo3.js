let body = document.getElementById("container");
body.style.backgroundColor = "grey";

let headerContainer = document.getElementById("header-container");
headerContainer.style.backgroundColor = "green";

let emergencyTasks = document.getElementsByClassName("emergency-tasks");
for (let index = 0; index < emergencyTasks.length; index += 1) {
  emergencyTasks[index].style.backgroundColor = "orange";
}

let noEmergencyTasks = document.getElementsByClassName("no-emergency-tasks");
for (let index = 0; index < noEmergencyTasks.length; index += 1) {
  noEmergencyTasks[index].style.backgroundColor = "yellow";
}

let emergencyTitle = document.querySelectorAll(".emergency-tasks h3");
for (let index = 0; index < emergencyTitle.length; index += 1) {
  emergencyTitle[index].style.backgroundColor = "purple";
}

let noEmergencyTitle = document.querySelectorAll(".no-emergency-tasks h3");
for (let index = 0; index < noEmergencyTitle.length; index += 1) {
  noEmergencyTitle[index].style.backgroundColor = "black";
}