$('document').ready(function() {


// Example 1
let btn1 = $('<button>Click Me!</button>')
btn1.click(function() {
alert('Have a Nice Day!');
console.log('Example 1');
    });

$('body').append(btn1);

//Example 2
$('#myButton').click(function() {
    alert($('#message').val())
});


//Example 3

$('#ex3').mouseover(function () { 
    $('#ex3').css('background-color', 'cadetBlue')
});

$('#ex3').mouseout(function () { 
    $('#ex3').css('background-color', 'white')
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
$('#p1').click(function () {
$('#p1').css('color', randomize())

});


//Example 5

$('#btn2').click(function() {
    let span = $('<span>Harrison Bender </span>')
    $('#ex5').append(span)
});

//Example 6

let friendsArray = ["Olivia" , "Michael", "Will" , "Thomas" , "Clint" , "Drew" , "Kevin", "Steven" , "Levi" , "Brett"];
let friendList = 0;
$('#btn3').click(function () {
    if (friendsArray[friendList] != undefined) {
        let newLi = $(`<li>${friendsArray[friendList]}</li>`);
        $('#ex6').append(newLi)
    } else {
       null
    }
    friendList++
});



});


