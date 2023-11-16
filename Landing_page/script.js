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