'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}
/*
 * Create the function factorial here
 */
/* In the following function I write down the HackerRank challenge, in the previous lines HackerRank establishes the code.*/
function factorial(n) {
    let fn = n
    for (let i = n; i >= 2; i--) {
        fn = fn * (i - 1)
    }
    return fn
}

function main() {
    const n = +(readLine());
    
    console.log(factorial(n));
}