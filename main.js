const makeCoffe = (ingredient) => {
  return new Promise((resolve, reject) => {
    if (ingredient) {
      resolve("Berhasil")
    } else {
      reject("gagal")
    }
  });
}
makeCoffe().then(console.log).catch(console.log)