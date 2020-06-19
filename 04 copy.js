var arr1 = [1, 2, 3, 3, 3, 3, 4, 4];
var arr2 = [3, 2, 4, 4, 2, 5, 2, 5, 5];
var arr3 = [3, 5, 7, 9, 1];

function solution(arr) {
    var result = [];
    for (var i = 0; i < (arr.length - 1); i++) {
        var count = 1;
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j] && arr[j] != 0) {
                arr[j] = 0;
                count += 1;
            }
        }
        if (count > 1) {
            result.push(count);
        }
    }
    if (result.length == 0) {
        result.push(-1);
    }
    return result;
}
solution(arr1);

// function getAllIndexes(arr1) {
//     var indexes = [], i;
//     for(i = 0; i < arr.length; i++)
//         if (arr[i] === val)
//             indexes.push(i);
//     return indexes;
// }


// function solution (arr) {
//     var arrCopy = arr.slice();
//     arr.sort(function(a, b){return a-b});


// };