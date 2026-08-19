// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

// Agregamos soporte para archivos .sql (requerido por Drizzle ORM)
config.resolver.sourceExts.push('sql');
// Soporte para WebAssembly (requerido por el migrator de Drizzle internamente)
config.resolver.assetExts.push('wasm');

module.exports = config;
