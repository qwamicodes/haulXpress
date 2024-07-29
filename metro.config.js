// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('@expo/metro-config');

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

// What I had initially, was affecting `getReactNativePersistence`-import {
// initializeAuth, getReactNativePersistence } from "firebase/auth"; as well
// config.resolver.assetExts.push("cjs");

//Fixes
// config.resolver.sourceExts.push("cjs");

// config.resolver.sourceExts = process.env.RN_SRC_EXT
//   ? [
//       ...process.env.RN_SRC_EXT.split(",").concat(config.resolver.sourceExts),
//       "cjs",
//     ] // <-- cjs added here
//   : [...config.resolver.sourceExts, "cjs"]; // <-- cjs added here

config.resolver.sourceExts.push('js', 'json', 'ts', 'tsx', 'cjs');

module.exports = config;
