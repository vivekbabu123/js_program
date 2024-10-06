function findlargestnumber(){
    let i = document.getElementById("number").value;

    const digitArray =i.split('').map(Number);

    if(digitArray.some(isNaN)){
        document.getElementById("result").innerHTML ='invaild input.Please enter a vaild list of digit';
    }
    else{
        if(!digitArray || digitArray.length ===0){
            return "invaild input. please Provide an array of digits";
        }
        let largest = digitArray[0];

        for (let i=1;i<=digitArray.length;i++){
            if(digitArray[i]>largest){
                largest= digitArray[i];
            }
        }
            document.getElementById("result").innerHTML =`the largest number is :${largest}`;
    }
    }
