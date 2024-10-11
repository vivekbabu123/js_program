function perfactnumber(){
    let n = document.getElementById("number").value;
    let i =1;
    let sum =0;
    while(i<n){
        if(n%i === 0){
            sum = sum +i;
            
        }
        i++;
    }
    if(sum ==n){
        document.getElementById("res").textContent=(n+'is a Perfact number');

    }
    else{
        document.getElementById("res").textContent =(n+'is not perfact number');
    }
}