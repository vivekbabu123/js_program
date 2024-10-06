function swap(){
    let a = parseInt(document.getElementById("numberA").value);
    let b = parseInt(document.getElementById('numberB').value);

    a=a+b;
    b=a-b;
    a=a-b;

    document.getElementById("result").innerHTML=`afterswapping: A=${a} , B=${b}`;

}