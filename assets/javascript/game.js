// To begin game:
// -random number must be generated between 19-120 and display on screen
// -wins/losses must be set to 0
// -four crystals must be set to random value between 1-12 
// -score must be set to 0 

// To play game: 
// -User clicks on each crystal
//     - Each click adds to the score, adding the value assigned to each cyrstal at the beginning of the game
// - WIN GAME IF: score equals (but does not exceed) random number displayed on screen 
// -LOSE GAME IF: score exceeds random number displayed on screen 

// WHEN GAME WON:
// -Add 1 to Wins display; reset game so that total score resets to 0, random number assigns new random number, and crystals each get new random value 

// WHEN GAME LOST: 
// -Add 1 to Losses display; reset game so that total score resets to 0, random number assigns new random number, and crystals each get new random value 

//GLOBAL VARIABLES

$(document).ready(function() {  
    
    var randomNumberMain; 
    var winningNum;
    var randomNumberCrystalBlue;
    var randomNumberCrystalGreen;
    var randomNumberCrystalPink;
    var randomNumberCrystalPurple;
    var startGame;
    var wins = 1;
    var losses = 1;
    var myScore = 0;
    
    //FUNCTIONS
    
    randomNumberMain = function getRandomNumberMain(min, max) {
        return Math.floor(Math.random() * (120 - 19 +1) ) + 19;
    };
    
    randomNumberCrystals = function getRandomNumberCrystals(min, max) {
        return Math.floor(Math.random() * (12 - 1 +1) ) + 1;
    };
    
    winningNum = randomNumberMain(19, 120);
    $("#random-number").html(winningNum);
    
    randomNumberCrystalBlue = randomNumberCrystals(1,12);
    randomNumberCrystalGreen = randomNumberCrystals(1,12);
    randomNumberCrystalPink = randomNumberCrystals(1,12);
    randomNumberCrystalPurple = randomNumberCrystals(1,12);
     
    function reset() {
        myScore = 0;
        randomNumberCrystalBlue = randomNumberCrystals(1,12);
        randomNumberCrystalGreen = randomNumberCrystals(1,12);
        randomNumberCrystalPink = randomNumberCrystals(1,12);
        randomNumberCrystalPurple = randomNumberCrystals(1,12);
        winningNum = randomNumberMain (19, 120);
        $("#random-number").html(winningNum);
    }

    $("#btn1").on("click",function(){
        myScore += randomNumberCrystalBlue;
        console.log(myScore, randomNumberCrystalBlue, randomNumberCrystalGreen, randomNumberCrystalPink, randomNumberCrystalPurple)
        $("#printscore").html(myScore);

        if (myScore === winningNum) {  
            $("#wins").html("Wins:" + wins++);
            alert("You win! Play again!");
            console.log(wins);
            myScore = 0;
            reset();
            // randomNumberCrystalBlue = randomNumberCrystals(1,12);
            // randomNumberCrystalGreen = randomNumberCrystals(1,12);
            // randomNumberCrystalPink = randomNumberCrystals(1,12);
            // randomNumberCrystalPurple = randomNumberCrystals(1,12);
            // winningNum = randomNumberMain (19, 120);
            // $("#random-number").html(winningNum);
    
        } else if (myScore > winningNum) {
            $("#losses").html("Losses:" + losses++);
            alert("Aw, you lost! Play again!");
            console.log(losses);
            reset();
            // myScore = 0;
            // randomNumberCrystalBlue = randomNumberCrystals(1,12);
            // randomNumberCrystalGreen = randomNumberCrystals(1,12);
            // randomNumberCrystalPink = randomNumberCrystals(1,12);
            // randomNumberCrystalPurple = randomNumberCrystals(1,12);
            // winningNum = randomNumberMain (19, 120);
            // $("#random-number").html(winningNum);
        };
    });

     $("#btn2").on("click",function(){
        myScore += randomNumberCrystalGreen;
        console.log(myScore, randomNumberCrystalBlue, randomNumberCrystalGreen, randomNumberCrystalPink, randomNumberCrystalPurple)
        $("#printscore").html(myScore);
    
        if (myScore === winningNum) {  
            $("#wins").html("Wins:" + wins++);
            alert("You win! Play again!");
            console.log(wins);
            reset();
            // myScore = 0;
            // randomNumberCrystalBlue = randomNumberCrystals(1,12);
            // randomNumberCrystalGreen = randomNumberCrystals(1,12);
            // randomNumberCrystalPink = randomNumberCrystals(1,12);
            // randomNumberCrystalPurple = randomNumberCrystals(1,12);
            // winningNum = randomNumberMain (19, 120);
            // $("#random-number").html(winningNum);
        
        } else if (myScore > winningNum) {
            $("#losses").html("Losses:" + losses++);
            alert("Aw, you lost! Play again!");
            console.log(losses);
            reset();
            // myScore = 0;
            // randomNumberCrystalBlue = randomNumberCrystals(1,12);
            // randomNumberCrystalGreen = randomNumberCrystals(1,12);
            // randomNumberCrystalPink = randomNumberCrystals(1,12);
            // randomNumberCrystalPurple = randomNumberCrystals(1,12);
            // winningNum = randomNumberMain (19, 120);
            // $("#random-number").html(winningNum);
        };
    });

     $("#btn3").on("click",function(){
        myScore += randomNumberCrystalPink;
        console.log(myScore, randomNumberCrystalBlue, randomNumberCrystalGreen, randomNumberCrystalPink, randomNumberCrystalPurple)
            $("#printscore").html(myScore);
        
        if (myScore === winningNum) {  
            $("#wins").html("Wins:" + wins++);
            alert("You win! Play again!");
            console.log(wins);
            reset();
            // myScore = 0;
            // randomNumberCrystalBlue = randomNumberCrystals(1,12);
            // randomNumberCrystalGreen = randomNumberCrystals(1,12);
            // randomNumberCrystalPink = randomNumberCrystals(1,12);
            // randomNumberCrystalPurple = randomNumberCrystals(1,12);
            // winningNum = randomNumberMain (19, 120);
            // $("#random-number").html(winningNum);
            
        } else if (myScore > winningNum) {
            $("#losses").html("Losses:" + losses++);
            alert("Aw, you lost! Play again!");
            console.log(losses);
            reset();
            // myScore = 0;
            // randomNumberCrystalBlue = randomNumberCrystals(1,12);
            // randomNumberCrystalGreen = randomNumberCrystals(1,12);
            // randomNumberCrystalPink = randomNumberCrystals(1,12);
            // randomNumberCrystalPurple = randomNumberCrystals(1,12);
            // winningNum = randomNumberMain (19, 120);
            // $("#random-number").html(winningNum);
        };
    });

        $("#btn4").on("click",function(){
            myScore += randomNumberCrystalPurple;
            console.log(myScore, randomNumberCrystalBlue, randomNumberCrystalGreen, randomNumberCrystalPink, randomNumberCrystalPurple)
            $("#printscore").html(myScore);
            
        if (myScore === winningNum) {  
            $("#wins").html("Wins:" + wins++);
            alert("You win! Play again!");
            console.log(wins)
            myScore = 0;
            reset();
            // randomNumberCrystalBlue = randomNumberCrystals(1,12);
            // randomNumberCrystalGreen = randomNumberCrystals(1,12);
            // randomNumberCrystalPink = randomNumberCrystals(1,12);
            // randomNumberCrystalPurple = randomNumberCrystals(1,12);
            // winningNum = randomNumberMain (19, 120);
            // $("#random-number").html(winningNum);
                
        } else if (myScore > winningNum) {
            $("#losses").html("Losses:" + losses++);
            alert("Aw, you lost! Play again!");
            console.log(losses)
            myScore = 0;
            reset();
            // randomNumberCrystalBlue = randomNumberCrystals(1,12);
            // randomNumberCrystalGreen = randomNumberCrystals(1,12);
            // randomNumberCrystalPink = randomNumberCrystals(1,12);
            // randomNumberCrystalPurple = randomNumberCrystals(1,12);
            // winningNum = randomNumberMain (19, 120);
            // $("#random-number").html(winningNum);
        };
    }); 
}); 
   
    
    