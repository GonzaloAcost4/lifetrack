// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

// Agregamos soporte para archivos .sql (requerido por Drizzle ORM)
config.resolver.sourceExts.push('sql');

module.exports = config;
