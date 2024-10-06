function primenumber(){
    let number = document.getElementById("prnumber").value;
    let count =0;
    for(let i=1;i<=number;i++){
        if(number%i==0){
            count++;
        }
    }    
        if(count==2)
            document.getElementById("result").innerHTML=`${number} is a prime number`;

    
    else{
            document.getElementById("result").innerHTML=`${number} is NOT a prime number`
            ;
    }
}