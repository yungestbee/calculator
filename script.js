let display = document.querySelector('input')
let buttons =  document.querySelectorAll('button')

Array.from(buttons).forEach( (button)=>{
    button.addEventListener('click', (e)=>{
        if (e.target.innerText == '='){
            display.value = eval(display.value);
            
        } else if (e.target.innerText == 'AC'){
            display.value= ""
        }else  if (e.target.innerText == 'DE'){
            display.value= display.value.slice(0,-1);
        } 
        else{
        console.log(e.target.innerText)
        display.value += e.target.innerText;
        }
    })
})