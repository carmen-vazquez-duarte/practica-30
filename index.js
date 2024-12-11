let myWindow

// function myFunction1() {
//     myWindow = window.open ("","", "width=200,height=100")

// }

// function myFunction2() {
//     myWindow.close();

// }

// function myFunction3() {
//     myWindow.moveTo(500,500);

// }

// function myFunction4() {
//     myWindow.resizeTo(300,300);

// }

// function myFunction5() {
//     myWindow.location.href= "https://www.google.es/";

// }









// function getRadomInt(max){
//     return Math.floor(math.random() * max)
// }

// function changeNumbers(){
//     let boxes = document.querySelectorAll(".box");
//     boxes.forEach(box => {
//         let n = getRandomInt(100);
//         box.innerHTML = n;
//     });
// }




function calc(){
    let n1 = parseInt(document.getElementById("n1").value);
    let op = document.getElementById("op").value;
    let n2 = parseInt(document.getElementById("n2").value);
    let result;

    if(op=="sumar"){
        result = n1 + n2;
    }else if(op=="restar"){
        result = n1 - n2
    }else if(op=="multi"){
        result = n1 * n2
    }else if(op=="dividir"){
        result = n1 / n2
    }
 document.getElementById("result").innerHTML = result;

 }
