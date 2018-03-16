/*////////////////////////////////////////////////////////////////////////////////////////////////////////////////
html shell
    -Create four buttons for the crystals x
Create Variables
    -Variable for a random number that shows on the screen between 19-120 
        -Random Number does not show until first click
    -Each crystal will have hidden value between 1-12
Make values appear and add to total score
Function that adds images to buttons

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
    //Main Random Value
var lotteryValue = Math.floor(Math.random() * 120) + 19;

    //Random Crystal Value
    var crystalValue1 = Math.floor(Math.random() * 12) + 1;
    var crystalValue2 = Math.floor(Math.random() * 12) + 1;
    var crystalValue3 = Math.floor(Math.random() * 12) + 1;
    var crystalValue4 = Math.floor(Math.random() * 12) + 1;



    /*
    //Random Pictures for Buttons COME BACK TO THIS USING CSS RIGHT NOW
    var images = ['../images/hamster1.jpg','../images/hamster2.jpg','../images/hamster3.jpg',
                '../images/hamster4.jpg','../images/hamster5.jpg','../images/hamster6.jpg','../images/hamster7.jpg','../images/hamster8.jpg']
                var randomImg1 = images[Math.floor(Math.random() * images.length)];
                var randomImg2 = images[Math.floor(Math.random() * images.length)];
                var randomImg3 = images[Math.floor(Math.random() * images.length)];
                var randomImg4 = images[Math.floor(Math.random() * images.length)];
    */


//jQuery
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
$(document).ready(function() {
    
    var wins = 0;
    var losses = 0;  
    var gameState = "";
    var score = 0;
    var lotteryValue = Math.floor(Math.random() * 120) + 19;
    var crystalValue1 = Math.floor(Math.random() * 12) + 1;
    var crystalValue2 = Math.floor(Math.random() * 12) + 1;
    var crystalValue3 = Math.floor(Math.random() * 12) + 1;
    var crystalValue4 = Math.floor(Math.random() * 12) + 1;
    
    $('.currentNumber').text(lotteryValue);
    $('.winTotal').text('Wins: ' + wins);
    $('.lossTotal').text('Losses: ' + losses);

    //Buttons
    $("button").val(crystalValue1,crystalValue1, crystalValue1,crystalValue1);
    
    $(".btn1").click(function () {     
        score += crystalValue1; 
        $('.scoreBox').text('Your Score: ' + score);    
           
        if(score >= lotteryValue) {
            alert('Win');
            wins++;
            $('.winTotal').text('Wins: '+ wins);
            
            $('.scoreBox').text('Your Score: ' + (score = 0));
        }
    }); 
    $(".btn2").click(function () {  
        score +=crystalValue2; 
        $('.scoreBox').text('Your Score: ' + score);
        if(score >= lotteryValue) {
            alert('Win');
            wins++;
            $('.winTotal').text('Wins: '+ wins);
            
            $('.scoreBox').text('Your Score: ' + (score = 0));
        }
        }); 
    $(".btn3").click(function () {  
        score += crystalValue3;
        $('.scoreBox').text('Your Score: ' + score);
        if(score >= lotteryValue) {
            alert('Win');
            wins++;
            $('.winTotal').text('Wins: '+ wins);
            
            $('.scoreBox').text('Your Score: ' + (score = 0));
        }
    }); 
    $(".btn4").click(function () {  
        score += crystalValue4;   
        $('.winTotal').text('Wins: '+ wins);
        $('.scoreBox').text('Your Score: ' + (score = 0)); 
              
    }); 

    

    console.log(score);
});






