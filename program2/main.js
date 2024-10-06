function factorialnumber(){

    let num = document.getElementById("factnumber").value;
     sum =1;
    
    for(i=1;i<=num;i++){
        sum = sum*i;
    }

    document.getElementById("result").innerHTML="facorial of number"+sum;
}