//  I need an array that included the words as a wordslist

var wordList = [ "desk", "books", "lab", "board"];
var newArr = [];
//function that can print word randomly each time

var randomWords = wordList[Math.floor(Math.random() * wordList.length)];
console.log(" the random word is" , randomWords);

var gussingLetter1= "";
// print user input
function printLetter() {

    var inputTextBox = document.getElementById("inputTextBox").value; 
    console.log("user input" , inputTextBox);

textBox.innerHTML = inputTextBox; 


//split the randomword for letters
//console.log( "split word" , )
var index= randomWords.indexOf(inputTextBox)


//cheack if the user input match the randomword

if (index >-1  ){
  
    console.log('right guess');
    newArr.push(randomWords[index])

    console.log(newArr);
    newArr.shift(randomWords[index]);
    console.log(newArr);
    
   
   
}

else{

    console.log("wrong letter");
}

}


// print he user input if it match 


