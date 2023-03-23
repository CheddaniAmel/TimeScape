function createRandomNumber(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}
console.log(createRandomNumber(100,399));

const clockBox=document.querySelector('.clockBox');

function createClock() {
    const div =document.createElement('div');
    div.setAttribute('class', 'clock');

    const minuteHand=document.createElement('div');
    minuteHand.setAttribute('class','minuteHand');
    minuteHand.setAttribute('style','transform: rotate('+createRandomNumber(-360,360)+'deg)')

    const dot=document.createElement('div');
    dot.setAttribute('class','dot');

    const hourHand=document.createElement('div');
    hourHand.setAttribute('class','hourHand');
    hourHand.setAttribute('style','transform: rotate('+createRandomNumber(-360,360)+'deg)')
    div.appendChild(minuteHand);
    div.appendChild(dot);
    div.appendChild(hourHand);
    return div;
}


for (var i = 0; i < 96; i++) {
    clockBox.append(createClock())
}

const minuteHands=document.querySelectorAll('.minuteHand');
const hourHand=document.querySelectorAll('.hourHand');

var setMinutesArray=[
    90,90,90,180,90,90,180,230,180,90,-90,0, 90,180,0,230,180,0,0,0,230,180,0,
    230,180,0,0,0, 230,180,0,230,180,90,-90,0,90,-90,0,-90,0,-90,90, -90,0,-90,
    90,0,90,90,-90,180,90,90,-90,180,180,180, 90,0,-180,90,-90,-180,180,0,90,-90,
    0,0,-90,0,90,-90, 180,0,30,90,-90,-30,90,-90,-90,-180,180,90,-90,180,90, 90,
    -90,0,0,-90,90,0];
var setHoursArray= [180,-90, -90, -90, -180, -90,-90,230,0,180,180,180,0, -90, 180,230,0,180,180,
        180,230,0,180,230,0,180,180,180,230,0,180,230,0,0,0,180, 180,0,90,180,90,90, 
        -90,0,90,90, -90, -90,180, -90,90, -90,180, -90,90,-90,0, 90, -90,-90,0,180,
        180,0,0,90, -90,180,130,90,0,-130,0,90, -90,180,180,180,180, 180,180,90,0,0,
        0,0,0,0,0, -90,90, -90,90,90, -90,-90]
        
settimeout(function(){
    for(let i=0;i<setMinutesArray.length;i++){
        minuteHands[i].setAttribute('style','transition:'+createRandomNumber(5,10),'transform: rotate('+setMinutesArray[i]+'deg)');
    }
    for(let i=0;i<setHoursArray.length;i++){
        hourHand[i].setAttribute('style','transition:'+createRandomNumber(5,10),'transform: rotate('+setHoursArray[i]+'deg)');
    }

},4000)

