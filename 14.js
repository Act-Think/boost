'use strict'

function solution(arr) {
    var answer = [];
    var map = new Map();
    arr.forEach(element => {
        if (map.has(element)) {
            map.set(element, map.get(element) + 1)
        }
        else {
            map.set(element, 1);
        }
    });
    map.forEach(value => {
        if (value > 1) 
            answer.push(value);
    });
    if (answer.length == 0) answer.push(-1);
    return answer;
}


var ex1 = [1, 2, 3, 3, 3, 3, 4, 4];
var ex2 = [3, 2, 4, 4, 2, 5, 2, 5, 5];
var ex3 = [3, 5, 7, 9, 1];
console.log(solution(ex1));
console.log(solution(ex2));
console.log(solution(ex3));
