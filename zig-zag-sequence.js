function processData(arr) {
    const n = arr.length;
    
    // O ponto médio será o pico da sequência zig-zag
    const mid = Math.floor((n - 1) / 2);

    // Trocar o elemento do meio com o último elemento para formar o pico
    [arr[mid], arr[n - 1]] = [arr[n - 1], arr[mid]];

    // Agora invertemos a segunda metade (de mid + 1 até o final)
    let left = mid + 1;
    let right = n - 2; // n - 1 já está no lugar certo (é o maior)

    while (left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }

    a= arr.join(' ');
    return a;
} 

processData([1,2,3,4,5,6,7]);