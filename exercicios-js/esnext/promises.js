function falarDepoisDe(segundos, frase) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (frase.length < 10) {
        reject("Frase tem menos de 10 caracteres");
      } else {
        resolve(frase);
      }
    }, segundos * 1000);
  });
}

falarDepoisDe(3, 'Que legal!')
  .then(frase => frase.concat('?!?!?!'))
  .then(outraFrase => console.log(outraFrase))
  .catch(e => console.log(e));