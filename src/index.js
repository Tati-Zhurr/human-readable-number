
module.exports = function toReadable(number) {
    if (number <= 20){
        return `${units(number)}`;
     };
      if (number < 100){
        if ((number%10) !==0){
            return `${dozens(Math.floor(number/10))} ${units(number%10)}`;
        };
        return `${dozens(Math.floor(number/10))}`;
     };
    
    if ((Math.floor((number%100)/10) === 1)||(Math.floor((number%100)/10) === 0)){
        if ((number%100) !==0){
            return `${units(Math.floor(number/100))} hundred ${units(number%100)}`
        };
         return  `${units(Math.floor(number/100))} hundred`;
    };
    if ((number%10) !==0){
        return `${units(Math.floor(number/100))} hundred ${dozens(Math.floor((number%100)/10))} ${units(number%10)}`;
    };
    return `${units(Math.floor(number/100))} hundred ${dozens(Math.floor((number%100)/10))}`;

    };


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
        return 'forty';
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


