const input = [1, 2, 3, 4, 5];
const output = input
  .filter(x => x % 2 === 0)
  .map(x => x * 3)
  .reduce((acc, x) => acc + x, 0);
console.log(output);
