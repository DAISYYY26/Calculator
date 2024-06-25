// Calculator program---


const display=document.getElementById('display');

function appendToDisplay(input){
     display.value += input;
}

function clearDisplay(){
    display.value="";
}
function clearoneDisplay(){
    display.value=display.value.toString().slice(0,-1);
}

function calculateDisplay(){
    try{
        display.value=eval(display.value)
    }
      catch(error){
        display.value="error"
        
    }
    
}


