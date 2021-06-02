document.addEventListener('DOMContentLoaded', function() {

// Example 1
var btn1 = document.createElement("button");  
btn1.innerText = "Example 1";  
btn1.id = "btn1";                
document.body.appendChild(btn1); 

    btn1.addEventListener('click', function() {
    window.alert("Have a Nice Day!");
    console.log('Example 1');

    });
    var message = document.getElementById("message");
document.getElementById("myButton").addEventListener("click", function() {
    window.alert( message.value );
});
//Example 3
    document.getElementById("ex3").addEventListener("mouseover", function() {
        document.getElementById("ex3").style.backgroundColor = "cadetBlue";
    });
    document.getElementById("ex3").addEventListener("mouseout", function() {
        document.getElementById("ex3").style.backgroundColor = "white";
    });
//Example 4
    function randomize() {
        document.getElementById('p1').style.color = randomColors();
      };
      

      function randomColors() {
        return '#' + Math.floor(Math.random() * 16777215).toString(16);
      };

    document.getElementById("p1").onclick = changeColor;
    function changeColor(){
    document.body.style.color = randomize();
    };
    
//Example 5
    let ex5Btn = document.getElementById("btn2");
    let ex5Div = document.getElementById("ex5");
    ex5Btn.addEventListener("click", function() {
        let span = document.createElement("span");
        span.textContent = "Harrison Bender ";
        ex5Div.appendChild(span);
    });
   
//Example 6
let ex6Btn = document.getElementById("btn3");
let ex6List = document.getElementById("ex6");
let friendsArray = ["Olivia" , "Michael", "Will" , "Thomas" , "Clint" , "Drew" , "Kevin", "Steven" , "Levi" , "Brett"];
let friendList = 0;

ex6Btn.addEventListener("click", function (){
    if (friendList < friendsArray.length){
        let li = document.createElement("li");
        li.textContent = friendsArray[friendList];
        ex6List.appendChild(li);
        friendList++
    }else {
        ex6Btn.disabled = "true";
    }

    });
});