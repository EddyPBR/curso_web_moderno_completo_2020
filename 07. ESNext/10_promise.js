function falarDepoisDe(segundos, frase){
  return new Promise((resolve, reject) => {
    setTimeout( () => {
      resolve(frase); // aceita apenas um atributo, porém aceita arrays e objetos.
    }, segundos * 1000);
  });
}

falarDepoisDe(3, 'Que Legal!')
  .then(frase => frase.concat('?!?'))
  .then(outraFrase => console.log(outraFrase))
  .catch(error => console.log(error));
