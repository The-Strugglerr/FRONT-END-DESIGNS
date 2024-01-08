const x = new Date().getSeconds();
console.log(x);
setTimeout(function () {
  console.log(`${x} seconds passed`);
}, 1000);

while (true) {
  if (new Date().getSeconds() - x >= 3) {
    console.log(`${new Date().getSeconds() - x} seconds are passed`);
    break;
  }
}
