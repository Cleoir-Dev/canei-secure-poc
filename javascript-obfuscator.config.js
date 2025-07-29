// javascript-obfuscator.config.js

module.exports = {
  compact: true, // Remove espaços em branco e quebras de linha

  //controlFlowFlattening: false, // Desativado: não reestrutura blocos de código
  //deadCodeInjection: false, // Desativado: não insere código inútil
  //debugProtection: false, // Desativado: não ativa proteção contra DevTools
  //debugProtectionInterval: 0, // Desativado (valor ignorado se o acima for false)
//
  //disableConsoleOutput: false, // Desativado: console.log ainda funciona
  //identifierNamesGenerator: 'hexadecimal', // Variáveis e funções renomeadas com base hexadecimal
  //log: false, // Não exibe logs no console durante a obfuscação
//
  //numbersToExpressions: false, // Números são mantidos como estão (não vira 1+2 etc)
  //renameGlobals: false, // Variáveis globais não são renomeadas
//
  selfDefending: true, // Código se protege contra edição
  //simplify: true, // Ativa simplificação de código redundante (bom)
//
  //splitStrings: false, // Não divide strings em pedaços
  //stringArray: true, // Move strings para um array codificado
//
  //stringArrayCallsTransform: false, // Não transforma chamadas `stringArray[index]` com wrappers
  //stringArrayCallsTransformThreshold: 0.5, // Threshold padrão para wrappers (sem efeito se acima for false)
//
  //stringArrayEncoding: [], // Nenhuma codificação usada (strings visíveis no array)
  //stringArrayIndexShift: true, // Altera os índices das strings no array (confunde leitura estática)
  //stringArrayRotate: true, // Roda o array de strings
  //stringArrayShuffle: true, // Embaralha a ordem do array de strings
//
  //stringArrayWrappersCount: 1, // Uma camada de wrapper para acessar strings
  //stringArrayWrappersChainedCalls: true, // Ativa encadeamento de chamadas do wrapper
  //stringArrayWrappersParametersMaxCount: 2, // Máximo de 2 parâmetros por wrapper
  //stringArrayWrappersType: 'variable', // Wrapper por variável (não por função anônima)
//
  //stringArrayThreshold: 0.75, // 75% das strings serão colocadas no array
  //unicodeEscapeSequence: false // Strings continuam literais (não são convertidas em \uXXXX)
}