'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
/* In the following function I write down the HackerRank challenge, in the previous lines HackerRank establishes the code.*/
/* Note: I have to make a repair */
function getSecondLargest(nums) {
    // Complete the function
    let first = 0, second
    for (let i = 0; i < nums.length; i++) {
        console.log(nums.length )
        if (nums[i] > first) {
            second = first;
            first = nums[i]
        }

        if (nums[i] > second && nums[i] < first) {
            second = nums[i];
        }
    }

return second;
}

function main() {
    const n = +(readLine());
    console.log(n)
    const nums = readLine().split(' ').map(Number);
    
    console.log(getSecondLargest(nums));
}