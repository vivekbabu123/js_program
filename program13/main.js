function armstrong(){
    let num = document.getElementById('number').value;
    let numDigit = num.toString().length;

    let sum = 0;
    let i ;
    let n = 0;
    
    i = num;

    while(num > 0){
        n = num % 10;
        num = Math.floor(num/10);
        sum = sum + Math.pow(n,numDigit);

    }
    if (sum == i ){
        document.getElementById("res").textContent = (i+"is an Armstrong number");
    }
    else{
        document.getElementById('res').textContent = (i+"is not armstrong number");
    }
}