 // guessing game that asks the user how many states I have been to

var correctAnswer = 40;

function chkAnswer() {
  var guess = document.getElementById('guess').value;
   
  if (guess > correctAnswer) {
    message = guess + ' is too high';
  } else if (guess < correctAnswer) {
    message = guess + ' is too low';
  } else {
    message = guess + ' is correct!';
  }
  //addToHintList();

  //if (guess == 40) {
  //  message = 'That is correct';
  //} else {
  //  message = 'Sorry, that is incorrect. The answer is 40';
  //}
  var iSay = document.getElementById('i-say');
  iSay.innerHTML = message;
}
 
document.getElementById('foo').addEventListener('click', chkAnswer);

//  function addToHintList() {
//    var hintListItem = document.createElement('li');
//    var hintNode = document.createTextNode(hint);
//    hintListItem.appendChild(hintNode);
//    document.getElementById('hint-list').appendChild(hintListItem);
//  }
 
 
 
  // var stateGame = function() {
    
 // var guess = prompt('How many states have I visited?');
	
 //	this.answer = answer;
   
 // this.checkAnswer = function(){
   
 //	if (answer == 40) {
 //			alert('That is Correct!');
 //	} else {
 //			alert('Sorry, that is incorrect');
 //		}
 //	};
   

 // }
  
//var stateGame1 = new stateGame();
//stateGame1.checkAnswer();

