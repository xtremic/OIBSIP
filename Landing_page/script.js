var isCliked = false;
function nav()
{
    var btn = document.getElementById('menu')
    var nav = document.getElementsByTagName('nav')[0]
    var ul = document.getElementsByTagName('ul')[0];
        if (isCliked === false){
            nav.style.height = "400px"
           
            ul.style.display = "block"

            isCliked = true
            
        }else{
            nav.style.height = ""
           
            ul.style.display = ""

            isCliked = false
        }
    
}

var isOpen = false

function Cars(event){
    var parenet = event.target
    var cars = document.getElementsByClassName('car-unit')

    if(isOpen === false){
        cars[0].style.transform = 'translate(200px)'
        cars[1].style.transform = 'translate(-250px)'

        isOpen = true
        
    }else{
        cars[0].style.transform = ''
        cars[1].style.transform = ''
        
        isOpen = false

    }
    

}

function change(){
    var car = document.getElementById('car')
    car.setAttribute('src', './medis/reed car1.jpg')
    
}

function Prev(){
    var car = document.getElementById('car')
    car.setAttribute('src', './medis/grey.jpeg')
   
}


