//declaring variables used in the game

let path = "sounds/";
let level = 0;
let actualSequence = [];
let userSequence = [];
let play = false;

//starting game with a keypress
$(document).keydown (() => {
    if (!play) {
        $("h3").text("");
        // $("h3").remove();
        $("h1").text("Level-1");
        setTimeout(() => newColor(Math.floor(Math.random() * 4)), 1000);
        play=true;
    }
});
    

//producing sound on each color click and... 
//...displaying next random color 
        $(".btn").click(function () {
	  if (actualSequence.length > userSequence.length) {
            let randNum = Math.floor(Math.random() * 4);
            // $(this).animate({ opacity: 0.5 }).animate({ opacity: 1 })
    
            colorSound(this.id);
            animateOnClick(this.id);
            userSequence.push(this.id);
    
            if (checker()) {
              setTimeout(() => newColor(randNum), 1000);
            }  
          }
        });


//function to produce sound of each color
function colorSound(color) {
    let sound = new Audio(path + color + ".mp3"); 
    sound.play();
}


//function for next random color
function newColor(num) {
   // play = true;
    userSequence = [];
    level++;
    $("h1").text("Level-" + level);
    let colorID = $($(".btn")[num]).attr("id");
    // $($(".btn")[num]).animate({ opacity: 0.5 }).animate({ opacity: 1 });
    $($(".btn")[num]).fadeIn(100).fadeOut(100).fadeIn(100);
    colorSound(colorID);
    actualSequence.push(colorID);
}

function  animateOnClick(id) {
    $("#" + id).addClass("pressed");
    setTimeout(() => $("#" + id).removeClass("pressed"), 100);
}


//function to compare the user sequence with the correct sequence
function checker() {
    if (userSequence[userSequence.length-1] === actualSequence[userSequence.length-1]) {
        if (userSequence.length === actualSequence.length) {
            return true;
        }
    }
    else {
        colorSound("wrong");
        $("body").addClass("game-over");
        $("h1").text("Game Over, Press Any Key to Restart");
        $("h3").text("you completed " + (level-1) + " levels");
        // $("body").removeClass("game-over");
        setTimeout(() => $("body").removeClass("game-over"), 300);
        restart ();
        return false;
    }   
}

function restart () {
    level = 0;
    actualSequence = [];
    play = false;   
}