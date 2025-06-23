function maxElemOfArray(arr) {
    let res = arr[0];
    for (let elem of arr) {
        if (elem > res) res = elem;
    }
    return res;
}

function minElemOfArray(arr) {
    let res = arr[0];
    for (let elem of arr) {
        if (elem < res) res = elem;
    }
    return res;
}

function sumOfArray(arr) {
    let res = 0;
    for (let elem of arr) res += elem;
    return res;
}
