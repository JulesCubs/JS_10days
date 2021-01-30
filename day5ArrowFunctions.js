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
 * Modify and return the array so that all even elements are doubled and all odd elements are tripled.
 * 
 * Parameter(s):
 * nums: An array of numbers.
 */
function modifyArray(nums) {
    /* Long version
    let numsB = nums
    for (let i = 0; i < numsB.length; i++){
        if (numsB[i] % 2 == 0) {
            nums[i] = numsB[i] * 2
        } else {
            nums[i] = numsB[i] * 3            
        }
    }
    return nums */
    /* Version 2
    function modifyArray(nums) {
        var something = function(n){
            if(n%2==0)
                return n*2;
            else
                return n*3;
        }
        var newArray = nums.map(something);
        return newArray;
        
    } */
    /* Version 3
    function modifyArray(nums) {
        var something = function(n){
            var a = (n%2==0) ? n*2: n*3;
            return a;
        }
        var newArray = nums.map(something);
        return newArray;    
    } */
    /* Version 4
    function modifyArray(nums) {
        var something = n => n = (n%2==0) ? n*2: n*3;
        var newArray = nums.map(something);
        return newArray;
        
    } */
    /* Version 5
    function modifyArray(nums) {
        var newArray = nums.map(n => n = (n%2==0) ? n*2: n*3);
        return newArray;
        
    }*/
    // Version 6
    function modifyArray(nums) {
        return nums.map(n => n = (n%2==0) ? n*2: n*3);   
    }
}


function main() {
    const n = +(readLine());
    const a = readLine().split(' ').map(Number);
    
    console.log(modifyArray(a).toString().split(',').join(' '));
}