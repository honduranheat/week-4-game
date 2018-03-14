/*////////////////////////////////////////////////////////////////////////////////////////////////////////////////
html shell
    -Create four buttons for the crystals x
Create Variables
    -Variable for a random number that shows on the screen between 19-120 
        -Random Number does not show until first click
    -Each crystal will have hidden value between 1-12
When a crystal is clicked, it will add the crystal value to the score
    -Player wins when score matches random number
    -Player loses when score exceeds random number
        -Game Restarts after win/loss
            -New random number assigned
            -Crystals have new random values
            -Score resets to 0
            -Games won and lost will update
*/////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//Variables
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var score = 0;
var wins = 0;
var losses = 0;  
    //Main Random Value
var lotteryValue = Math.floor(Math.random() * 120) + 19;
    //Random Crystal Values
var crystalValue1 = Math.floor(Math.random() * 12) + 1;
var crystalValue2 = Math.floor(Math.random() * 12) + 1;
var crystalValue3 = Math.floor(Math.random() * 12) + 1;
var crystalValue4 = Math.floor(Math.random() * 12) + 1;
    //Random Pictures for Buttons
var images = ['../images/hamster1.jpeg','../images/hamster2.jpeg','../images/hamster3.jpeg','../images/hamster4.jpeg']
var randomImg1 = images[Math.floor(Math.random() * images.length)];
var randomImg2 = images[Math.floor(Math.random() * images.length)];
var randomImg3 = images[Math.floor(Math.random() * images.length)];
var randomImg4 = images[Math.floor(Math.random() * images.length)];

document.getElementsByClassName("btn1").randomImg1;
document.getElementsByClassName("btn2").randomImg2;
document.getElementsByClassName("btn3").randomImg3;
document.getElementsByClassName("btn4").randomImg4;



console.log(lotteryValue);
console.log(crystalValue1);
console.log(crystalValue2);
console.log(crystalValue3);
console.log(crystalValue4);
console.log(randomImg1);
console.log(randomImg2);
console.log(randomImg3);
console.log(randomImg4);


