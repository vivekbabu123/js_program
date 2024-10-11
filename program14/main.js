function strongnumber(){
    let num = document.getElementById("number").value;
    let i ,p,r;
    let sum =0;
    let save_num;

    save_num = num;
    while(num!=0){
        i=1;
        p=1;
        r = num %10;
        while (i<=r){
            p = p*i;
            i++;
        }
        sum = sum +p;
        num = Math.floor(num/10);
    }
    if (sum ==save_num){
        document.getElementById("res").textContent = (save_num+"is a strong number");
    }else{
        document.getElementById("res").textContent = (save_num+ "is not strong number");
    }
}