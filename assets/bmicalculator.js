function calculateBMI() {
    const height = Number(document.getElementById("bmi-height").value);
    const weight = Number(document.getElementById("bmi-weight").value);

    const BMI = weight / Math.pow(height, 2);

    document.getElementById("bmi-result").value = Math.round(BMI * 100) / 100;
}
