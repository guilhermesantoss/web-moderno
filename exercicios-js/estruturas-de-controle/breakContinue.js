const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (x in nums) {
    if (x == 5) {
        break; // o break desvia o fluxo da aplicacao dentro de FOR, WHILE e SWITCH
    }
    console.log(`${x} = ${nums[x]}`);
}

for (y in nums) {
    if (y == 5) {
        continue; // age em cima de somente estruturas de repeticao
    }
    console.log(`${y} = ${nums[y]}`);
}

externo: for (a in nums) {
    for (b in nums) {
        if (a == 2 && b == 3) {
            break externo;
        }
        console.log(`Par = ${a},${b}`);
    }
}

console.log('Fim!');

// O BREAK só funciona dentro do SWITCH / FOR / WHILE
// CONTINUE só funciona dentro de estruturas de repetição: FOR / WHILE