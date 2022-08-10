
//declaring variables used in the game
let path = "sounds/";
let level = 0;
let actualSequence = [];
let userSequence = [];
let count= 0;
let flag = false;

//starting game with a keypress
$(document).one("keypress", function() {  
    flag = true;
    $("h1").text("Level-1");
    setTimeout(() => newColor(Math.floor(Math.random()*4)), 1000);

    //producing sound on each color click and...
    //...displaying next random color
    $(".btn").click(function() {
        if (flag) {
        let randNum = Math.floor(Math.random()*4);
        $(this).animate({opacity:0.5}).animate({opacity:1});
        colorSound(this.id);
        userSequence.push(this.id);
        count++;
        if (userSequence[count-1] === actualSequence[count-1])

            setTimeout(() => newColor(randNum), 1500);
        else
            alert("game out!");
        }
    });
});
    

//function to produce sound of each color
function colorSound(color) { 
    let sound = new Audio(path + color + ".mp3");
    sound.play();
}

//function for next random color
function newColor(num) {
    // console.log($($(".btn")[num]).attr("id"));
    level++;

     $("h1").text("Level-" + level);
    let colorID = $($(".btn")[num]).attr("id");
    
    
    $($(".btn")[num]).animate({opacity:0.5}).animate({opacity:1});
    colorSound(colorID); 
    actualSequence.push(colorID);
    console.log(actualSequence);
}