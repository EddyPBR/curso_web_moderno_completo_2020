const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for(let x in nums){
  if (x == 5) break
  console.log(`${x} = ${nums[x]}`);
}

for(let x in nums) {
  if (x == 5) continue
  console.log(`${x} = ${nums[x]}`);
}

/**
 * Break interrompe todo o laço
 * Continue interrompe a repetição do laço e indo para o proximo laço
 */

// Não use isso...
externo: for (let a in nums){
  for (b in nums) {
    // if (a == 2 && b == 3) break
    if (a == 2 && b == 3) break externo
    console.log(`Par = ${a}, ${b}`);
  }
}

console.log('Fim!');