function power() {
    let vari1 = parseFloat(document.getElementById('var1').value);
    
    if (isNaN(vari1)) {
        document.getElementById('result').textContent = "Please enter a valid number.";
        return;
    }

    let result = Math.pow(vari1, 2);
    document.getElementById('result').textContent = `The square of ${vari1} is ${result}.`;
}

function round() {
    let vari1 = parseFloat(document.getElementById('var1').value);
    
    if (isNaN(vari1)) {
        document.getElementById('result').textContent = "Please enter a valid number.";
        return;
    }

    let result = Math.round(vari1);
    document.getElementById('result').textContent = `The rounded value of ${vari1} is ${result}.`;
}

function random() {
    let result = Math.random().toFixed(4); // Optional: limit to 4 decimal places
    document.getElementById('result').textContent = `Random number between 0 and 1: ${result}`;
}
