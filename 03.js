function ganjilGenap(num) {
  console.log(num % 2 === 0 ? "Genap" : "Ganjil");
}

inputTests = [43, 1032];

inputTests.forEach((val) => {
  ganjilGenap(val);
});