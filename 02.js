function cekNilai(nilai) {
  if (nilai >= 90) {
    console.log("A");
  } else if (nilai >= 80) {
    console.log("B");
  } else if (nilai >= 70) {
    console.log("C");
  } else if (nilai >= 60) {
    console.log("D");
  } else {
    console.log("E");
  }
}

const inputTests = [91, 90, 89, 80, 75, 63, 59, 32];

inputTests.forEach((val) => {
  cekNilai(val);
});