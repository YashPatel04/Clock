require('dotenv').config();
const moment = require('moment');
const iplocate = require("node-iplocate");

var address;
var location;
//getting the ip address of the user
fetch('https://api.ipify.org')
    .then((res)=> res.text())
    .then(ip => {
        address=ip;
        iplocate(address, {api_key:"b049e2dc38a45f9eecfe2d2f66f6117f"}).then(function(results){
            console.log(results);
            location = results.city +", "+ results.country_code;
        });
    })
    .catch(err=>console.log(err));

function updateTime(){
    var myDate = new Date();
    let day = moment(myDate).format('LL');
    let time = moment(myDate).format('LTS')
    let loc = document.getElementById('loc');
    let tyme=document.getElementById('time');
    let dayndate= document.getElementById('dayndate');
    dayndate.innerHTML = day;
    tyme.innerHTML=time;
    loc.innerHTML = location;
}

setInterval(updateTime,1000); 