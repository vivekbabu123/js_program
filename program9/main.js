function palindrome(){
    let number = parseInt(document.getElementById("number").value);

    const originalNumber = number;

    let reverseNumber = 0;

    while(number>0){
        const digit = number%10;
        reverseNumber = reverseNumber*10 + digit;
        number = Math.floor(number/10);


    }
    if(originalNumber === reverseNumber){
        document.getElementById("resume").innerHTML = originalNumber + "is a palindrome number";
    }else{
        document.getElementById("resume").innerHTML = originalNumber + "is not palindrome number";
    }
}