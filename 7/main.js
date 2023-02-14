import { pay } from "./processPayment.js";
import { validateInfo } from "./validateInfo.js";
//import { calculateRating } from "./calculateRating.js";
//import "https://checkout.razorpay.com/v1/checkout.js";
export function final() {
  console.log("final");
  if (validateInfo()) {
    // function processPayment(name, amt) {
    //   if (pay()) {
    //     return true;
    //   } else {
    //     return false;
    //   }
    // }
    /*function pay1() {
      let sel = document.getElementById("sel");
      let amt = sel.value;
      setamt(amt);
      let name = document.getElementById("name").value;
      if (processPayment(name, amt)) {
        console.log("Payment Successful");
      } else {
        console.log("Payment Failed");
      }
    }
*/
    /* let main = document.getElementById("main");
    main.style.display = "none";
    let div = document.createElement("div");
    let block = `
    <p>Hello {name}!!</p><br><p>Select a product from drop-down!</p>
    <select name="sel" id="sel">
    <option value="10000">Red Card =>100rs</option>
    <option value="20000">Blue Card => 200rs</option>
    <option value="30000">Green Card =>300rs</option>
    </select>
    <button onclick='pay()'>Pay</button>`;
    div.innerHTML = block;
    div.style.display = "block";
    document.body.appendChild(div);
    */
  }
} // calculateRating();
window.final = final;
