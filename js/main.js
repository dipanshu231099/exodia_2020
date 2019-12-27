var wave1 = document.getElementById('bg2');
var wave2 = document.getElementById('bg3');

setInterval(moveTheWave1,1)


function moveTheWave1(){
    var wave1_time = new Date().getMilliseconds();
    if(wave1_time<500){
        wave2.style.bottom = String(18 - ((wave1_time-500)/250)) + "vh";
        wave1.style.bottom = String(22 + (wave1_time/500)) + "vh";
    }
    else{
        wave2.style.bottom = String(16 + (wave1_time/250)) + "vh";
        wave1.style.bottom = String(23 - ((wave1_time-500)/500)) + "vh";
    } 
}

function sunMove(){
    var sunsecs = new Date().getSeconds();
    var sunmi = new Date().getMilliseconds();
    
}
