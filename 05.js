var arr1 = [1, 2, 3, 3, 3, 3, 4, 4];
var arr2 = [3, 2, 4, 4, 2, 5, 2, 5, 5];
var arr3 = [3, 5, 7, 9, 1];

function a (num) {
    return num >= 3 && num <= 3;
}

console.log(arr1.filter(a));

