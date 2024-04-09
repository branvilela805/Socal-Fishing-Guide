  // This is my fist JavaScript code!
 // console.log('Hello World');


 //Performing a task
function greet(name, lastName) {
    console.log('Hello '+ name + '' + lastName );


}

function revealMessage() {
    document.getElementById("hiddenMessage").style.display = 'block';

}

function revealMessage2() {
    document.getElementById("hiddenMessage2").style.display = 'block';

}

function revealMessage3() {
    document.getElementById("hiddenMessage3").style.display = 'block';

}

function countDown(){
    var currentVal = document.getElementById("countDownButton").innerHTML;
    var newVal = currentVal -1 ;
    document.getElementById("countDownButton").innerHTML = newVal;

}


// Calculating a value
function square(number) {

    return number * number;

}


console.log(square(2));