module.exports = {
  compact: true,                // Remove espaços em branco e quebras de linha para reduzir o tamanho final do arquivo
  selfDefending: true,          // Impede que o código seja formatado ou modificado, dificultando a engenharia reversa
  deadCodeInjection: true,      // Injeta código morto (instruções inúteis) para confundir ferramentas de análise
  debugProtection: true,        // Impede o uso do console dev (F12) — pode causar travamentos ou loops
  disableConsoleOutput: true,   // Remove todas as chamadas para console.log, console.error, etc.
  simplify: true,               // Simplifica expressões para dificultar leitura
  stringArray: true,            // Move todas as strings literais para um array ofuscado, em vez de deixá-las no código
  stringArrayThreshold: 0.5     // Define a porcentagem de strings que serão movidas para o array (1 = 100%, 0.5 = 50%, 0 = nenhuma)
};