function countOf (arr, value) {
    var count = 0;
    arr.forEach(element => {
        if (element == value) count++;
    });
    return count;
}


function solution (arr) {
    var map = new Map();
    arr.forEach(element => {
        if (map.has(element)) return;
        count = countOf(arr, element);
        if (count > 1 ) map.set(element, count);
    });
    if (map.size == 0) map.set (0, -1);
    return [...map.values()];
}

var arr1 = [1, 2, 3, 3, 3, 3, 4, 4];
var arr2 = [3, 2, 4, 4, 2, 5, 2, 5, 5];
var arr3 = [3, 5, 7, 9, 1];

console.log(solution(arr1));
