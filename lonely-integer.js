function lonelyinteger(a) {
    const freq = new Map();
    for (const val of a) {
        freq.set(val, 1 + (freq.get(val) || 0) );
    }

    for (const [key, value] of freq) {
        if (value === 1) {
            return parseInt(key);
        }
    }
    
    return -1;
}