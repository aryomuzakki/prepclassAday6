function filmRating(age) {
  if (age >= 21) {
    console.log("Dewasa");
  } else if (age >= 13) {
    console.log("Remaja");
  } else if (age >= 9) {
    console.log("Bimbingan Orang Tua");
  } else {
    console.log("Semua Usia");
  }
}

inputTests = [15, 32, 9, 1];

inputTests.forEach((val) => {
  filmRating(val);
});