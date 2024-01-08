let counter=0;
function count(){
    counter++;
    document.querySelector('h2').innerHTML=counter;

    if(counter%5===0){
        alert(`"counter is now ${counter}"`)  // ` symbol above tab
    }
}
   
   function change(){
        if(document.querySelector('h1').innerHTML==='GoodBye!'){
            document.querySelector('h1').innerHTML='Hello!';
        }else{
            document.querySelector('h1').innerHTML='GoodBye!';
   }
   
}
//effecient code:
/*
   
   function change(){
    let heading=document.querySelector('h1');
        if(heading.innerHTML==='GoodBye!'){
        heading.innerHTML='Hello!';
        }else{
        heading.innerHTML='GoodBye!';
   }
     
}

*/