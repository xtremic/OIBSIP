var isOpened = false;
const cards = [];
var selected = 0;

function openCards(event){
    if(isOpened === true)
    {
        closeUp(event);
    }else{
        openUp(event);
    }
}

function initiate(){
    var elements = document.getElementsByClassName('card_container');
    for(var i=0; i<elements.length; i++)
    {
        if(i !== selected)
        {
            elements[i].style.display = 'none';
            elements[i].style.transform = 'translateX(80px) scale(0)';
        }
        cards.push(elements[i]);
    }
}

function animateNextCard(){
    var element = cards[selected];
    element.style.transform = 'translateX(80px) scale(0)';
    setTimeout(()=>{
        element.style.display = 'none';
    }, 500)
}

function animatePreviousCard(){
    var element = cards[selected];
    element.style.transform = 'translateX(-80px) scale(0)';
    setTimeout(()=>{
        element.style.display = 'none';
    }, 500)
}

function getNextItem(){
    if(selected < (cards.length-1))
    {
        animateNextCard();
        selected++;
        setTimeout(()=>{
            for(var i=0; i<cards.length; i++)
            {
                if(i !== selected)
                {
                    cards[i].style.display = 'none';
                }else{
                    cards[i].style.display = 'block';
                    cards[i].style.transform = 'translateX(0) scale(1)';
                }
            }
        }, 500);
    }
}

function getPreviousItem(){
    if(selected === 0)
    {
        selected = 0;
    }else{
        animatePreviousCard();
        selected--;
        setTimeout(()=>{
            for(var i=0; i<cards.length; i++)
            {
                if(i !== selected)
                {
                    cards[i].style.display = 'none';
                }else{
                    cards[i].style.display = 'block';
                    console.log(cards[i].style.animation);
                    cards[i].style.animation = 'moveOut';
                    cards[i].style.transform = 'translateX(0) scale(1)';
                }
            }
        }, 500);
    }
}

function openUp(event){
    var parent = event.srcElement.parentElement;
    var bigCards = parent.getElementsByClassName('big_card');
    var smallCards = parent.getElementsByClassName('small_card');

    var firstBig = bigCards[3];
    firstBig.style.transform = 'translateX(150px) translateY(40px) scale(0.9) rotate(24deg)';

    var secondBig = bigCards[2];
    secondBig.style.transform = 'translateX(50px) translateY(10px) scale(0.9) rotate(10deg)';

    var thirdBig = bigCards[1];
    thirdBig.style.transform = 'translateX(-50px) translateY(10px) scale(0.9) rotate(-10deg)';

    var fourthBig = bigCards[0];
    fourthBig.style.transform = 'translateX(-150px) translateY(40px) scale(0.9) rotate(-24deg)';

    //Small Cards
    var firstSmall = smallCards[3];
    firstSmall.style.transform = 'translateX(-110px) translateY(-70px) scale(0.9) rotate(15deg)';
    
    var secondSmall = smallCards[2];
    secondSmall.style.transform = 'translateX(-140px) translateY(260px) scale(0.9) rotate(-15deg)';
    secondSmall.style.boxShadow = '5px -5px 10px rgba(40,40,40,0.4)';

    var thirdSmall = smallCards[1];
    thirdSmall.style.transform = 'translateX(220px) translateY(-40px) scale(0.9) rotate(-15deg)';

    var fourthSmall = smallCards[0];
    fourthSmall.style.transform = 'translateX(190px) translateY(260px) scale(0.9) rotate(15deg)';
    isOpened = true;
}

function closeUp(event){
    var parent = event.srcElement.parentElement;
    var bigCards = parent.getElementsByClassName('big_card');
    var smallCards = parent.getElementsByClassName('small_card');

    for(var i = 0; i < bigCards.length; i++)
    {
        bigCards[i].style.transform = "";
    }

    for(var i = 0; i < smallCards.length; i++)
    {
        smallCards[i].style.transform = "";
    }
    isOpened = false;
}
