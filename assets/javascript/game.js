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


//jQuery
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
$(document).ready(function() {
    
    var wins = 0;
    var losses = 0;  
    var score = 0;
    var lotteryValue = Math.floor(Math.random() * 120) + 19;
    var crystalValue1 = Math.floor(Math.random() * 12) + 1;
    var crystalValue2 = Math.floor(Math.random() * 12) + 1;
    var crystalValue3 = Math.floor(Math.random() * 12) + 1;
    var crystalValue4 = Math.floor(Math.random() * 12) + 1;

    $('.currentNumber').text(lotteryValue);
    $('.winTotal').text('Wins: ' + wins);
    $('.lossTotal').text('Losses: ' + losses);
    $("button").val(crystalValue1, crystalValue2, crystalValue3, crystalValue4);

    function winLose(value) {
        score += value;  
        $('.scoreBox').text('Your Score: ' + score);     
        if(score == lotteryValue) {
            alert('You Win');
            wins++;
            reset();
        } else if (score > lotteryValue) {
            alert('You Lose');
            losses++;
            reset();
        }  
    }
     
//Button 1
////////////////////////////////////////////////////////////////////////////
    $(".btn1").click(function () {     
        
        winLose(crystalValue1);    
    }); 

//Button 2
///////////////////////////////////////////////////////////////////////////////
    $(".btn2").click(function () {  
        winLose(crystalValue2);
    }); 

//Button 3
/////////////////////////////////////////////////////////////////////////
    $(".btn3").click(function () {  
        winLose(crystalValue3);  
    }); 

//Button 4
////////////////////////////////////////////////////////////////////////////
    $(".btn4").click(function () {  
        winLose(crystalValue4);   
    });
//Reset
/////////////////////////////////////////////////////////////////////////////
    function reset() {
        lotteryValue = Math.floor(Math.random() * 120) + 19;
        $('.lossTotal').text('Losses: ' + losses);
        $('.scoreBox').text('Your Score: ' + (score=0));
        $('.currentNumber').text(lotteryValue);
        crystalValue1 = Math.floor(Math.random() * 12) + 1;
        crystalValue2 = Math.floor(Math.random() * 12) + 1;
        crystalValue3 = Math.floor(Math.random() * 12) + 1;
        crystalValue4 = Math.floor(Math.random() * 12) + 1;
    };
});





