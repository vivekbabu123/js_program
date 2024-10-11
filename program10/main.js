function generatepascleTringle(n) {
    const tringle = [];
    for (let i = 0; i < n; i++) {
        tringle[i] = [];
        tringle[i][0] = 1; // First element of each row is always 1
        for (let j = 1; j < i; j++) {
            tringle[i][j] = tringle[i - 1][j - 1] + tringle[i - 1][j]; // Correct calculation
        }
        tringle[i][i] = 1; // Last element of each row is always 1
    }
    return tringle;
}

function printpascalsTringle(tringle) {
    let result = '';
    for (let i = 0; i < tringle.length; i++) {
        result += ' '.repeat((tringle.length - i - 1) * 2) + tringle[i].join('   ') + '\n'; // Adjusting space between numbers
    }
    return result;
}

function generateanddisplay() {
    const numRowinput = document.getElementById('number');
    const numRow = parseInt(numRowinput.value);

    if (isNaN(numRow) || numRow < 1) {
        alert('Please enter a valid positive integer number of rows');
        return;
    }

    const pascalstringle = generatepascleTringle(numRow);
    const resultelement = document.getElementById('res');
    resultelement.textContent = printpascalsTringle(pascalstringle);
}
