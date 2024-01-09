/*
localstorage.getItem(x) => to get the item
localstorage.setItem(x,value) =>to set some value to it
*/

//instaed of counter=0
if(!localStorage.getItem('counter')){
    localStorage.setItem('counter',0);
}

function count() {
    let counter = localStorage.getItem('counter');
    counter++;
    document.querySelector('h1').innerHTML=counter;
    localStorage.setItem('counter',counter);
}

document.addEventListener('DOMContentLoaded',function(){
    //document.querySelector('h1').innerHTML=localStorage.getItem('counter'); //Apply this to avoid again zero after refreshing
    document.querySelector('button').onclick=count;
});
