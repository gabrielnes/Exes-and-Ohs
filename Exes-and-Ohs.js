function XO(str) {

    let x_counter = 0;
    let o_counter = 0;

    let temp = '';

    for (let i = 0; i < str.length; i++){
        
        temp = str[i];

        if (temp == 'x' || temp == 'X'){
            x_counter++;
        }

        else if (temp == 'o' || temp == 'O'){
            o_counter++;
        }
    }
    return (x_counter == o_counter);
}

console.log(XO('ooxx'));
console.log(XO('xooxx'));
console.log(XO('ooxXm'));
console.log(XO('zpzpzpp'));
console.log(XO('zzoo'));


