
const cards = ["queen", "queen", "king", "king"]

var cardsInPlay = [];

var cardOne = cards[0];
cardsInPlay.push(cards[0]);
console.log('User filpped queen');

var cardTwo = cards[1];
cardsInPlay.push(cards[1]);
console.log('User flipped king');

var cardThree = cards[2];
cardsInPlay.push(cards[2]);
console.log('User flipped king');

var cardFour = cards[3];
cardsInPlay.push(cards[3]);
console.log('User filpped king');

if (cardsInPlay[0]) === cardsInPlay[1] {
	alert("You found a match!");
} else {
	alert("Sorry, try again");	
}	