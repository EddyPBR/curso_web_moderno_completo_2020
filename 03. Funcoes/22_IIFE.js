// IIFE: Immediately Invoked Function Expression

// tambem serve como estratégia para fugir do escopo global.
(function() {
  console.log('Será executado na hora!');
  console.log('Foge do escopo mais abrangente');
})();

