function pageCount(n, p) {
    const totalFlips = Math.floor(n/2);
    const myP = Math.floor(p/2);
    return Math.min(myP, totalFlips - myP);
}