function solution(v) {
    var result = [];
    if (v[0][0] == v[1][0]) { // [1, a], [1, b], [2, a or b]
        result.push(v[2][0]);
        if (v[0][1] == v[2][1]) { // [1, a], [1, b], [2, a]
            result.push(v[1][1]);
        } else { // [1, a], [1, b], [2, b]
            result.push(v[0][1]);
        }
    } else if (v[0][0] == v[2][0]) { // [1, a], [2, a or b], [1, b]
        result.push(v[1][0]);
        if (v[0][1] == v[1][1]) { // [1, a], [2, a], [1. b]
            result.push(v[2][1]);
        } else { // [1, a], [2, b], [1. b]
            result.push(v[0][1])
        }
    } else { // [1, a or b], [2, a], [2, b]
        result.push(v[0][0]);
        if (v[0][1] == v[1][1]) { // [1, a], [2, a], [2, b]
            result.push(v[2][1]);
        } else { // [1, b], [2, a], [2, b]
            result.push(v[1][1]);
        }
    }

    return result;
}