const anonimo = process.argb.indexOf('-a') !== -1;
// console.log(anonimo);

if (anonimo) {
  process.stdout.write('Fala Anônimo!\n');
  process.exit();
} else {
  process.stdout.write('Informe o seu nome: ');
  process.stdin.on('data', data => {
    const nome = data.toString().replace('\n', '');
    
    process.stdout.write(`Fala ${nome}!!\n`);
    process.exit();
  });
}

// para executar va no terminal, digite 16_EntradaESaida.js -a, e depois 16_EntradaESaida.js
