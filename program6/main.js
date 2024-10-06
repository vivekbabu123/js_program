function swapnumber (){
    let a = document.getElementById("numberA").value;
    let b = document.getElementById("numberB").value;

    let c =a;

    a=b;
    b=c;

    document.getElementById("result").innerHTML= `after swapping: A=${a},B=${b}`;
}
