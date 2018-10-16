'use strict';

let energyVolume = [7, 2, 1, 4, 8];
let counters = [];

for (let i=0; i<energyVolume.length; i++) {
    let counter = function cnt() {
        const currentVal = energyVolume[cnt.i];
        if (currentVal > 1) { 
            console.log(`Телепорт ${cnt.i+1} использован, заряд — ${currentVal-1} единиц`);
        } else if(currentVal === 1) {
            console.log(`Телепорт ${cnt.i+1} использован, заряд — ${currentVal-1} единиц, требуется перезарядка`);
        } else {
            console.log(`Телепорт ${cnt.i+1} недоступен, перезаряжается`);
        }
        energyVolume[cnt.i]--;
    };
    counter.i = i;
    counters.push(counter);
}

 counters[0]();
 counters[1]();
 counters[2]();
 counters[3]();
 counters[4]();
 counters[1]();
