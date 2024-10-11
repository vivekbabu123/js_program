function isleapyear() {
    const year = document.getElementById('year').value;

    // Correcting the if condition for leap year calculation
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        document.getElementById("result").textContent = year + ' is a Leap Year';
    } else {
        document.getElementById("result").textContent = year + ' is not a Leap Year';
    }
}
