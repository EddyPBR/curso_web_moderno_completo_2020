let comparaComThis = function(param) {
  console.log(this === param);
}

comparaComThis(global);

const obj = {};
comparaComThis = comparaComThis.bind(obj);
comparaComThis(global);
comparaComThis(obj);

let comparaComThisArrow = param => console.log(this === param);
comparaComThisArrow(global);
comparaComThisArrow(module.exports);

/**
 * Agora vamos comparar a arrow function tentando amarra-la
 * ao objeto obj com o bind(), neste a arrow function é mais
 * firme e vence até mesmo do bind(), ele não se deixa ser
 * amarrada a outro objeto.
 */
comparaComThisArrow = comparaComThisArrow.bind(obj);
comparaComThisArrow(obj);
comparaComThisArrow(module.exports);

/**
 * LEMBRETE:
 * no nodeJS GLOBAL
 * no browser WINDOW
 */