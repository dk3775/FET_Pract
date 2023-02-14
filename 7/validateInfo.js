// import { processPayment } from "./processPayment";

export function validateInfo() {
  let name = document.getElementById("name").value;
  let pass = document.getElementById("pass").value;

  console.log(name, pass);
  if (name == "" || pass == "") {
    alert("Please fill all the details");
    return false;
  } else if (name == "admin" && pass == "admin") {
    return true;
  } else {
    alert("Please enter a valid username and password!!");
    return false;
  }
}
