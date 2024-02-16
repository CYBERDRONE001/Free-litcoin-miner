// Define global variable to store initial balance
let initialBalance = 0;
let balance = initialBalance;

// Function to update balance
function updateBalance(amount) {
    balance += amount;
    document.getElementById("balance").textContent = balance.toFixed(6) + " LTC";
}

// Function to increase balance every second
function increaseBalance() {
    updateBalance(0.0000001); // Increase balance by 0.01 LTC every second
    collectMiningBalance(); // Call function to collect mining balance
}

// Start increasing balance
setInterval(increaseBalance, 1000); // Call the function every second

// Variable to track if the balance has expired
let balanceExpired = false;

// Expiry after 3 days
setTimeout(() => {
    balanceExpired = true;
    updateButton(); // Call the function to update the button text and link
}, 3 * 24 * 60 * 60 * 1000); // 3 days in milliseconds

// Function to update button text and link
function updateButton() {
    const button = document.querySelector("#mining button");
    if (balanceExpired) {
        button.textContent = "Buy Miner";
        button.onclick = () => {
            navigate('buy'); // Redirect to Buy Miner page
        };
    }
}

function navigate(page) {
    // Implement navigation logic based on the page parameter
    const pages = {
        'home': 'freeltccoin.html',
        'payout': 'freeltccoinwithdraw.html',
        'deposit': 'deposit.html',
        'buy': 'buyminer.html'
    };
    const targetPage = pages[page];
    if (targetPage) {
        window.location.href = targetPage; // Redirect to the target page
    } else {
        console.error('Invalid page parameter:', page);
    }
}

function startMining() {
    // Implement mining process here
    // Update user's balance accordingly
    // Set expiration timer (3 days)
    alert("Mining process initiated! Expires in 3 days.");
}

function withdraw() {
    // Implement withdrawal logic
    // Check if user's balance is above withdrawal threshold
    // Redirect to withdrawal page with the withdrawal amount as a query parameter
    if (balance >= 0.00010000) {
        // Calculate the withdrawal amount
        const withdrawalAmount = 0.00010000;
        
        // Redirect to the withdrawal page with the withdrawal amount as a query parameter
        window.location.href = `freeltccoinwithdraw.html?amount=${withdrawalAmount}`;
    } else {
        showNotification("Insufficient balance for withdrawal.Kindly deposit or buy a miner to withdraw any Amount of your choice");
    }
}


// Function to add withdrawal transaction to history
function addToTransactionHistory(amount) {
    var transactionHistory = document.getElementById("transactionHistory");
    var transactionEntry = document.createElement("p");
    var timestamp = new Date().toLocaleString();
    transactionEntry.textContent = "Withdrawn: " + amount.toFixed(6) + " LTC at " + timestamp;
    transactionHistory.appendChild(transactionEntry);
}

// Function to show notification
function showNotification(message) {
    alert(message);
}

// Function to collect mining balance and add it to available balance
function collectMiningBalance() {
    // Logic to collect mining balance goes here
    // For demonstration, let's add a random amount between 0 and 0.0001 LTC
    const miningBalance = Math.random() * 0.000001;
    // Add mining balance to available balance
    balance += miningBalance;
    // Update the display of available balance
    document.getElementById("balance").textContent = balance.toFixed(6) + " LTC";
    // Update the display of mining balance
    document.getElementById("miningBalance").textContent = miningBalance.toFixed(6) + " LTC";
}
// Open slide menu
    function openSlideMenu() {
        document.getElementById('slideMenu').style.width = '200px';
    }

    // Close slide menu
    function closeSlideMenu() {
        document.getElementById('slideMenu').style.width = '0';
    }