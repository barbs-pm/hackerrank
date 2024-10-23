function sockMerchant(n, ar) {
    const hash = new Map();
    let pairs = 0;
    for (const sock of ar) {
        hash.set(sock, 1 + hash.get(sock) || 1);
    }
    
    for (const count of hash.values()) {
        pairs += Math.floor(count / 2);
    }
    
    return pairs;
}