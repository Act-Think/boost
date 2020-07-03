function solution (arr) {
    var answer = [];
    var map = new Map();
    arr.forEach(element => {
        if (map.has(element))
         map.set(element, map.get(element) + 1);
    });
    map.forEach(element => {
        answer.push(map.get(element));
    if (map.size == 0) answer.push(-1);
    });
return answer;
}