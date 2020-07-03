function solution(arr) {
    var answer = [];
    var map = new Map();
    arr.forEach(element => {
        if (map.has(element)) {
            map.set(element, map.get(element) + 1);
        } else {
            map.set(element, 1)
        }
    });
    map.forEach(value => {
        if (value > 1) {
            answer.push(map.get(value));
        }
    });
    if (answer.length == 0) answer.push(-1);
    return answer;
}