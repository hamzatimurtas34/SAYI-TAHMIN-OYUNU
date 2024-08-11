
let randomNumber = Math.floor(Math.random() *100) + 1

console.log(randomNumber);

let btn = document.getElementById("btn")


btn.addEventListener("click",function(){


    let inp = document.getElementById("inp").value; 


     if(randomNumber == inp){


        alert("TEBRİKLER BİLDİNİZ")



     }
     else{
        alert("bilemediniz")
     }


})
