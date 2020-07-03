'use strict'
function countNum(num, array) {
    return array.filter(x => x == num).length;
}


function solution(arr) {
    var answer = [];
    var set = new Set();
    arr.forEach(element => {
        if (set.has(element)) return;
        set.add(element);
        var count = countNum(element, arr);
        if (count > 1) answer.push(count);

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