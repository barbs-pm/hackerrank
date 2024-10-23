function diagonalDifference(arr) {
    let sumRight = 0;
    let sumLeft = 0;
    let len = arr.length;
    
    for (let i = 0; i < len; i++) {
        sumRight += arr[i][i];
        // The second diagonal is the reverse of the first diagonal
        sumLeft += arr[i][len - 1 - i];
    }
    
    return Math.abs(sumRight - sumLeft);
}
