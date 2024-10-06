 function prime(){
        let i = document.getElementById("number").value;

        let j =2;
        let ch = 0;

        if(i<=1)
            ch = 1;
        while(j <= Math.floor(i/2)){
            if (i%j==0){
                ch =1 ;
                break;
            }
            else{
                j++;
            }
        }

        if(ch==0){
            document.getElementById("result").innerHTML=`${i} is a prime number.`;

        }
        else{
            document.getElementById("result").innerHTML=`${i} is a not prime number.`;
        }
 }