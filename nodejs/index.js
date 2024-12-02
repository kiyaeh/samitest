// First script
function calculate() {
    console.log("Calculating in Script 1");
}

// Second script
function calculate() {
    console.log("Calculating in Script 2");
}

// Calling calculate()
calculate(); // This will call the calculate() from Script 2, overriding Script 1.
