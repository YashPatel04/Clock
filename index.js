var moment = require('moment');

function updateTime(){
    var myDate = new Date();
    let day = moment(myDate).format('LL');
    let time = moment(myDate).format('LTS')
    let location = "Palm Coast, USA";
    let loc = document.getElementById('loc');
    let tyme=document.getElementById('time');
    let dayndate= document.getElementById('dayndate');
    dayndate.innerHTML = day;
    tyme.innerHTML=time;
    loc.innerHTML = location;
}

setInterval(updateTime,1000); 