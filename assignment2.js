function printDetails (num) {
    let minimum = Infinity;
    let maximum = -Infinity;
    const evenNum = [];
    const oddNum = [];
    const primeNum = [];
    for (const i of num) {
        if (i < minimum) {
            minimum = i;
        }
        else if (i > maximum) {
            maximum = i
        }

        if (i % 2 == 0) {
            evenNum.push(i);
        }
        else {
            oddNum.push(i);
        }
        

        let flag = 0;
        for (let c = 2; c < i; c++) {
            if (i % c == 0) {
                flag = 1;
                break;
            }
    
        }
        if (i > 1 && flag == 0) {
            primeNum.push(i);
        }
    
    }

    console.log(`The minimum number is ${minimum}`)
    console.log(`The maximum number is ${maximum}`)
    console.log(`The even numbers are ${evenNum}`)
    console.log(`The odd numbers are ${oddNum}`)
    console.log(`The prime numbers are ${primeNum}`)
}

printDetails([12, 37, 139, -46, 3, -4000, -569])