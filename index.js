var randomNumber1 =Math.floor(Math.random()*6)+1  ;

var randomDiceNumber1 = "images/"+"dice"+randomNumber1+".png";

 document.querySelectorAll("img")[0].setAttribute("src", randomDiceNumber1);

var randomNumber2 =Math.floor(Math.random()*6)+1  ;

 var randomDiceNumber2 = "images/"+"dice"+randomNumber2+".png";

 document.querySelectorAll("img")[1].setAttribute("src", randomDiceNumber2);
if (randomNumber1 === randomNumber2){
  document.querySelector("h1").innerHTML="<em>Draw!</em>";

}
else if (randomNumber1 < randomNumber2){
  document.querySelector("h1").innerHTML="<em>🚩Player 2 Wins!</em>";
}
else{
  document.querySelector("h1").innerHTML="<em> 🚩Player 1 Wins!</em>";
}
