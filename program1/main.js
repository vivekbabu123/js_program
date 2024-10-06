function evenodd(){
    let number = document.getElementById("Numberitem").value;

    if(number % 2 == 0){
        document.getElementById("res").innerHTML ="Number is even";
    }
    else{
        document.getElementById("res").innerHTML ="Number is odd";
    }
}