
module.exports = function toReadable(number) {
    if (number <= 20){
        return `${units(number)}`;
     };
      if (number < 100){
        return `${dozens(Math.floor(number/10))} ${units(number%10)}`;
     };
    
    if ((Math.floor((number%100)/10) === 1)||(Math.floor((number%100)/10) === 0)){
      return `${units(Math.floor(number/100))} hundred ${units(number%100)}`
    };
    return `${units(Math.floor(number/100))} hundred ${dozens(Math.floor((number%100)/10))} ${units(number%10)}`;
    };
/*let readByThree = Math.floor(numberAbs/1000);
let three = readByThree%1000;
 while (readByThree >= 0)&&(three >0){
    if (three <= 20){
        result = fromOneToNineteen(three)+ result;
     };
     if (three > 20)&&(three < 100){
        result =`${dozens(Math.floor(three/10))} ${fromOneToNineteen(three%10)}` + result;
     };
     if (three >100)&& (number < 120){
        result =`${units(Math.floor(three/100))} hundred ${fromOneToNineteen(number%10)}` + result; 
      };
     if (three >= 120)&& (number < 1000){
      result =`${units(Math.floor(three/100))} hundred ${dozens(Math.floor((three%100)/10))} ${fromOneToNineteen(number%10)}`; 
    };

    if (range >=1){
        result = result +`${countRange(range)}`;
    };
    range++;
    three = readByThree%1000;
    readByThree = Math.floor(readByThree/1000);

 };*/

 function units(n){
    switch(n){
        case 0: 
        return 'zero';
        case 1:
        return 'one';
        case 2:
        return 'two';
        case 3:
        return 'three';
        case 4:
        return 'four';
        case 5:
        return 'five';
        case 6:
        return 'six';
        case 7:
        return 'seven';
        case 8:
        return 'eight';
        case 9:
        return 'nine';
        case 10:
        return 'ten';
        case 11:
        return 'eleven';
        case 12:
        return 'twelve';
        case 13:
        return 'thirteen';
        case 14:
        return 'fourteen';
        case 15:
        return 'fifteen';
        case 16:
        return 'sixteen';
        case 17:
        return 'seventeen';
        case 18:
        return 'eighteen';
        case 19:
        return 'nineteen';
        case 20:
        return 'twenty';
    }
}

function dozens(n){
    switch(n){
        case 2:
        return 'twenty';
        case 3:
        return 'thirty';
        case 4:
        return 'fourty';
        case 5:
        return 'fifty';
        case 6:
        return 'sixty';
        case 7:
        return 'seventy';
        case 8:
        return 'eighty';
        case 9:
        return 'ninety';
    }
}

function countRange(n){
    switch(n){
        case 1:
        return 'thousand';
        case 2:
        return 'million';
        case 3:
        return 'billion';
        case 4:
        return 'trillion';
        case 5:
        return 'quadrillion';
        case 6:
        return 'quitillion';
    }
};

