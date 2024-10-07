
document.getElementById('bmi-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

  
    let weight = parseFloat(document.getElementById('weight').value);
    let height = parseFloat(document.getElementById('height').value) / 100;  

    let bmi = (weight / (height * height)).toFixed(2);

    document.getElementById('bmi-value').textContent = bmi;

  
    let status = '';
    let resultBox = document.getElementById('bmi-result');

    if (bmi < 18.5) {
        status = 'Underweight';
        resultBox.className = 'underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        status = 'Normal weight';
        resultBox.className = 'normal';
    } else if (bmi >= 25 && bmi < 29.9) {
        status = 'Overweight';
        resultBox.className = 'overweight';
    } else {
        status = 'Obese';
        resultBox.className = 'obesity';
    }

    document.getElementById('bmi-status').textContent = status;

 
    resultBox.style.display = 'block';
});
