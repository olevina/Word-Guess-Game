var wins = 0;
var letter;
var numberOfGuesses = 15;
var alreadyGuessed = [];
var wrongLetters = [];
var rightLetters = [];

var winLetter = ["i", "h", "a", "t", "e", "j", "s"];


//somehow keeps the _ in place in html when key is pressed
window.onload = function () {
    for (let index = 0; index < winLetter.length; index++) {
        rightLetters.push("_");


    };
}
//when we press the key on the keyboard
document.onkeydown = function (event) {
    //out letter var become equal to the key pressed
    letter = event.key;
    //no one needs this
    console.log(letter);
    //every time any key is pressed the number of guesses goes down
    numberOfGuesses--;
    //and displays it
    document.getElementById("numberofguessesremaining").innerHTML = numberOfGuesses;
    //if number of guesses exceeds 15 it resets it back to 15
    if (numberOfGuesses === 0) {
        numberOfGuesses = 15;
    }



    //if the letter is pressed that is inside of the win letters
    if (winLetter.includes(letter)) {
        //goes through win letter array
        for (let index = 0; index < winLetter.length; index++) {
            //looks at the current index of the win letter and compares it to the letter chosen by the user
            if (winLetter[index] === letter) {
                //actually puts in in the rightLetter array at the current index
                rightLetters[index] = letter;


            }
        }


        //if rightetter array is the same as the winLetter array
        if (rightLetters.toString() === winLetter.toString()) {
            //add +1 to win
            wins++;
            //displays a win
            document.getElementById("wins").innerHTML = wins;

        }

        
        //shows up on HTML

        document.getElementById("currentword").innerHTML = rightLetters;
        //no one needs this
        console.log(rightLetters);
    }
    //if the winLetter var doen't include the letter pressed
    if (!winLetter.includes(letter)) {
        //it pushes it to the wrongLetters array
        wrongLetters.push(letter);
        //and displays
        document.getElementById("lettersalreadyguessed").innerHTML = wrongLetters;

    }





}

//doesn't work:


//to get rid of the commas when entered
//winLetter.join(' ');

//not to log same letters
//if (wrongLetters.includes(letter)) {
//   (!wrongLetters.push(letter));
//}








