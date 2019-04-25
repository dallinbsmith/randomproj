function solution(X, Y, A) {
    var N = A.length;
    var result = -1;
    var nX = 0;
    var nY = 0;
    for (i = 0; i < N; i++) {
        if (A[i] == X)
            console.log("bar")
            nX += 1;
        else if (A[i] == Y)
            console.log("foo")
            nY += 1;
        if (nX == nY)
            console.log("foobar")
            result = i;
    }
    return result;
}

console.log(solution(7, 42, [6, 42, 11, 7, 1, 42]))