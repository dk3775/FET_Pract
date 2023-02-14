var options = {
  key: "rzp_test_8Ag6oQh9UAE7Q9", // Enter the Key ID generated from the Dashboard
  amount: amt, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
  currency: "INR",
  name: "Practical 7",
  mode: "test",
  description: "Test Transaction",
  image:
    "https://upload.wikimedia.org/wikipedia/en/thumb/9/93/Old_Monk_Label.jpg/175px-Old_Monk_Label.jpg",
  prefill: {
    name: name,
  },
  theme: {
    color: "#1473E6",
  },
  handler: function (response) {
    alert("Payment Successful");
  },
};
var rzp1 = new Razorpay(options);
export function pay() {
  rzp1.open();
  rzp1.on("payment.failed", function (response) {
    alert("Your payment has failed due to " + response.error.description + ".");
  });
}
