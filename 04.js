function isKabisat(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        console.log("Kabisat");
      } else {
        console.log("Bukan Kabisat")
      }
    } else {
      console.log("Kabisat");
    }
  } else {
    console.log("Bukan Kabisat");
  }
}

inputTests = [1900, 2000, 2001, 2016];

inputTests.forEach((val) => {
  isKabisat(val);
});