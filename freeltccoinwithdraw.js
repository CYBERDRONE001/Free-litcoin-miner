// Retrieve balance from localStorage on page load
window.onload = function() {
    var balance = localStorage.getItem("balance");
    if (balance) {
        updateBalance(parseFloat(balance));
    }

    var miningBalance = localStorage.getItem("miningBalance");
    if (miningBalance) {
        updateMiningBalance(parseFloat(miningBalance));
    }
}

function withdraw() {
    // Check if withdrawal is allowed for the day
    var lastWithdrawalDate = localStorage.getItem("lastWithdrawalDate");
    var today = new Date().toISOString().split('T')[0];
    if (lastWithdrawalDate === today) {
        alert("You can only withdraw once per day.");
        return;
    }

    // Withdraw logic here
    var withdrawAmount = parseFloat(document.getElementById("withdrawAmount").value);
    var currentBalance = parseFloat(localStorage.getItem("balance") || "0.00000000");
    var miningBalance = parseFloat(localStorage.getItem("miningBalance") || "0.00000000");

    // Check if there are sufficient funds to withdraw
    if (withdrawAmount <= currentBalance && withdrawAmount <= miningBalance) {
        // Update balance and transaction history display
        var newBalance = currentBalance - withdrawAmount;
        var newMiningBalance = miningBalance - withdrawAmount;
        updateBalance(newBalance);
        updateMiningBalance(newMiningBalance);
        addToTransactionHistory(withdrawAmount);

        // Update balance and last withdrawal date in localStorage
        localStorage.setItem("balance", newBalance.toString());
        localStorage.setItem("miningBalance", newMiningBalance.toString());
        localStorage.setItem("lastWithdrawalDate", today);

        // Show notification
        showNotification("Your withdrawal request will be delivered within the next 24 hours.");
        document.getElementById("withdrawMessage").textContent = "";
    } else {
        document.getElementById("withdrawMessage").textContent = "Insufficient balance.";
    }
}

function updateBalance(balance) {
    document.getElementById("balance").textContent = balance.toFixed(8) + " LTC";
}

function updateMiningBalance(balance) {
    document.getElementById("miningBalance").textContent = balance.toFixed(8) + " LTC";
}

function addToTransactionHistory(amount) {
    var transactionHistory = document.getElementById("transactionHistory");
    var transactionEntry = document.createElement("p");
    var timestamp = new Date().toLocaleString();
    transactionEntry.textContent = "Withdrawn: " + amount.toFixed(8) + " LTC at " + timestamp;
    transactionHistory.appendChild(transactionEntry);
}

function showNotification(message) {
    alert(message);
}
