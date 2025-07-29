// javascript-obfuscator.config.js

module.exports = {
  //compact: true,
  //controlFlowFlattening: true,                    // Reestrutura blocos de código (funciona bem se não exagerar)
  //controlFlowFlatteningThreshold: 0.5,            // Aplica em 50% do código (evita lentidão/travas)
//
  //deadCodeInjection: true,
  //deadCodeInjectionThreshold: 0.2,
//
  //debugProtection: false,                         // ⚠️ Desligado para evitar quebra em WebView
  //debugProtectionInterval: 0,
//
  //disableConsoleOutput: true,                     // Remove console.log, etc
//
  //identifierNamesGenerator: 'hexadecimal',        // Renomeia para nomes tipo _0xabc
//
  //log: false,
  //numbersToExpressions: true,                     // Torna números difíceis de ler

  //renameGlobals: false,                           // ⚠️ Essencial manter falso em Ionic
//
  selfDefending: true,                           // ⚠️ Pode travar em Android/iOS se ativado
  //simplify: true,
//
  //splitStrings: true,
  //splitStringsChunkLength: 8,
//
  //stringArray: true,
  //stringArrayEncoding: ['rc4'],                   // Codifica strings com RC4
  //stringArrayIndexShift: true,
  //stringArrayRotate: true,
  //stringArrayShuffle: true,
//
  //stringArrayCallsTransform: true,
  //stringArrayCallsTransformThreshold: 1,          // Transforma todas as chamadas
//
  //stringArrayWrappersCount: 2,                    // 2 camadas de wrappers
  //stringArrayWrappersChainedCalls: true,
  //stringArrayWrappersParametersMaxCount: 2,
  //stringArrayWrappersType: 'variable',

  //stringArrayThreshold: 1,                        // Aplica em todas as strings
  //unicodeEscapeSequence: true                     // Strings convertidas em unicode
};