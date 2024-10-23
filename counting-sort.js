function countingSort(arr) {
    const freq = new Array(100).fill(0);
    
    for (const num of arr) {
        freq[num]++;
    }
    
    return freq;
}