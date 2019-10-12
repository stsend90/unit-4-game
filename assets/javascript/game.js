let gemValues = [1, 2, 3, 4, 5];
let win = 0;
let loss = 0;
let alreadyChoosenValues;
let total;
let target;

$(document).ready(function(){
    function randomNumGenerator(num){
	    return Math.floor(Math.random()*num);
    };

    function gameSetup(){
	    total = 0;
	    target = randomNumGenerator(120);

	    if(target === 0){
		    target = randomNumGenerator(120);

	    };
	    $('#randomNumElm').html("Winning Number: " + target);
	    $('#userScoreElm').html("Your total score is: ");
	
	    alreadyChoosenValues =[];
	
	    while (alreadyChoosenValues.length !==4) {
		    let gemIndex = randomNumGenerator(gemValues.length);
		    let gemRandomNum = gemValues[gemIndex];
		    if(alreadyChoosenValues.indexOf(gemRandomNum) === -1){
			    alreadyChoosenValues.push(gemRandomNum);
		    };
	    //console.log(alreadyChoosenValues); 
	    };

	    gem1 = alreadyChoosenValues[0];
	    gem2 = alreadyChoosenValues[1];
	    gem3 = alreadyChoosenValues[2];
	    gem4 = alreadyChoosenValues[3];
	    // console.log(gem1,gem2,gem3,gem4);
    };
    
    gameSetup();


    function gameStatus(){
	    if(total === target){
            win = win+1;
            //console.log("win");
		    document.getElementById('winHTML').innerHTML="Win: " +win; 
		    gameSetup();
	    };

	    if(total > target){
	        loss = loss+1;
	        //console.log(loss);
		    document.getElementById('lossHTML').innerHTML="Loss: " + loss; 
	        gameSetup();
	    };
    };

    $("#gem1HTML").on("click", function() {
        total = total +gem1;
        //console.log(total + " user total");
        document.getElementById('userScoreElm').innerHTML="Your total score is: " + total; 
        
        gameStatus();
    });

    $("#gem2HTML").on("click", function() {
        total = total +gem2;
        //console.log(total + " user total");
        document.getElementById('userScoreElm').innerHTML="Your total score is: " + total;
        gameStatus();
    });


    $("#gem3HTML").on("click", function() {
        total = total +gem3;
        console.log(total + " user total");
        document.getElementById('userScoreElm').innerHTML="Your total score is: " + total;
        gameStatus();
    });

    $("#gem4HTML").on("click", function() {
        total = total +gem4;
        console.log(total + " user total");
        document.getElementById('userScoreElm').innerHTML="Your total score is: " + total;
        gameStatus();
    });
});