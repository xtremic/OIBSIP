var buttons = document.getElementsByClassName('buttons');
var screen = document.getElementById('screen');

var result = 0
var calculate = ''
var signs = ['-', '+', '/','*']
var onscreen = ''

screen.value = 0

for (var i = 0; i < buttons.length-1; i++) {
    

    buttons[i].addEventListener('click', (e)=>{
         calculate += e.target.value
        
         screen.value = calculate
         
       
        
       

    })
    

}

buttons[buttons.length-1].addEventListener('click', ()=>{
   if(screen.value !== ''){
    result = eval(calculate)
    screen.value = result
   }
})

var AC = document.getElementsByClassName('button')

AC[0].addEventListener('click', ()=>{
    screen.value = 0
    calculate = " "

})

AC[1].addEventListener('click', ()=>{
    screen.value = screen.value.slice(0,-1)
    calculate = screen.value
     
   
})

