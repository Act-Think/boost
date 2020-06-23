function solution(arr) {
    var answer = [];
    var set = new Set([]);
    arr.forEach(element => {
        if (set.has(element)) return;
        set.add(element);
        count = countOf(arr, element);
        if (count > 1) answer.push(count);
    }
    );
    if (answer.length == 0) answer.push(-1);
    return answer;
}

function countOf(arr, value) {
    var count = 0;
    arr.forEach(element => {
        if (element == value) count++;
    });
    return count;
}

var arr1 = [1, 2, 3, 3, 3, 3, 4, 4];
var arr2 = [3, 2, 4, 4, 2, 5, 2, 5, 5];
var arr3 = [3, 5, 7, 9, 1];

console.log(solution(arr1));