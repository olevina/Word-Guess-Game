var wins = 0;
var letter;
var numberOfGuesses = 15;
var alreadyGuessed = [];
var wrongLetters = [];
var rightLetters = [];

var winLetter = ["ihatejs", "ilovebeer", "cssisok", "alcoholic", "vodka"];
var rightWord;


//somehow keeps the _ in place in html when key is pressed
window.onload = function () {
    var words =  Math.floor(Math.random() * Math.floor(winLetter.length));
    this.console.log(words);
    console.log (winLetter[words]);
    rightWord=winLetter[words];
    console.log(rightWord);

    for (let index = 0; index < winLetter[words].length; index++) {
        rightLetters.push("_");
    };

    var audio = new Audio('./assets/scary.mp4');
    audio.play();

   
    
}
//when we press the key on the keyboard
document.onkeydown = function (event) {
    //out letter var become equal to the key pressed
    letter = event.key;
    //no one needs this
    console.log(letter);
    //every time any key is pressed the number of guesses goes down

    //and displays it
    document.getElementById("numberofguessesremaining").innerHTML = numberOfGuesses;
    //if number of guesses exceeds 15 it resets it back to 15
    if (numberOfGuesses === 0) {
        numberOfGuesses = 15;
    }



    //if the letter is pressed that is inside of the win letters
    if (rightWord.includes(letter)) {
        //goes through win letter array
        for (let index = 0; index < rightWord.length; index++) {
            //looks at the current index of the win letter and compares it to the letter chosen by the user
            if (rightWord[index] === letter) {
                //actually puts in in the rightLetter array at the current index
                rightLetters[index] = letter;


            }
        }


        //if rightetter array is the same as the winLetter array
        console.log("this is rightLetters.string: " + rightLetters.join("").toString());
        console.log("this is rightword to strinfg: " + rightWord.toString());


        if (rightLetters.join("").toString() === rightWord.toString()) {
            //add +1 to win
            wins++;
            //displays a win
            document.getElementById("wins").innerHTML = wins;
            
            //start
            var words =  Math.floor(Math.random() * Math.floor(winLetter.length));
            
            rightWord=winLetter[words];

            
            rightLetters= [];
            for (let index = 0; index < winLetter[words].length; index++) {
                rightLetters.push("_");
            };
            
            document.getElementById("currentword").innerHTML = rightLetters;
            numberOfGuesses = 15;
            document.getElementById("numberofguessesremaining").innerHTML = numberOfGuesses;
            var alreadyGuessed = [];
            document.getElementById("lettersalreadyguessed").innerHTML = alreadyGuessed;

            //end

        }


        //shows up on HTML

        document.getElementById("currentword").innerHTML = rightLetters.join(" ");
        numberOfGuesses--;

        //no one needs this
        console.log(rightLetters);
    }
    //if the winLetter var doen't include the letter pressed
    else if (!wrongLetters.includes(letter)) {
        //it pushes it to the wrongLetters array

        wrongLetters.push(letter);
        document.getElementById("lettersalreadyguessed").innerHTML = wrongLetters;
        numberOfGuesses--;
        document.getElementById("numberofguessesremaining").innerHTML = numberOfGuesses;




    }



}









