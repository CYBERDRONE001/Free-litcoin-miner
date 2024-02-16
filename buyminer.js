document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("buyForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Get the selected mining machine and payment amount
        const miningMachine = document.getElementById("miningMachine").value;
        const payment = parseFloat(document.getElementById("payment").value);

        // Validate the payment amount
        if (isNaN(payment) || payment <= 0) {
            document.getElementById("message").textContent = "Please enter a valid payment amount.";
            return;
        }

        // Perform payment processing here
        // For demonstration, let's just display a success message
        document.getElementById("message").textContent = `Payment successful for ${payment} LTC. You purchased ${miningMachine}.`;

        // Redirect to another page after a delay (replace "redirect_page.html" with the desired URL)
        setTimeout(() => {
            window.location.href = "freeltccoinconfirmation.html";
        }, 2000); // 2000 milliseconds (2 seconds) delay before redirecting
    });
});


