var randomno1 = Math.floor(Math.random()*6)+1;
var imagesource = "Images/dice-six-faces" + randomno1+".png";
document.querySelectorAll("img")[0].setAttribute("src",imagesource);

var randomno2 = Math.floor(Math.random()*6)+1;
var imagesource2 = "Images/dice-six-faces" + randomno2+".png";
document.querySelectorAll("img")[1].setAttribute("src",imagesource2);

if(randomno1>randomno2){
    document.querySelector('h1').innerHTML = "Player 1 Wins"
}else if(randomno1<randomno2){
    document.querySelector('h1').innerHTML = "Player 2 Wins"
}else{
    document.querySelector('h1').innerHTML = "Draw"
}