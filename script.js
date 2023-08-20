ampm=document.getElementById('ampm')
function display(){
    let datetime= new Date();
    let hr= datetime.getHours();
    let min= padzero(datetime.getMinutes());
    let sec= padzero(datetime.getSeconds());
    if(hr>12){
        hr=hr-12;
        ampm.innerHTML='PM'
    }
    else{
        ampm.innerHTML='AM'
    }
    hr=padzero(hr);
    document.getElementById('hours').innerHTML=hr;
    document.getElementById('minutes').innerHTML=min;
    document.getElementById('seconds').innerHTML=sec;
}
function padzero(num){
   return num<10?"0"+num:num
}
setInterval(display,100)