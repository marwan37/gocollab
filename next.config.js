/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.resolve.alias['vscode'] = require.resolve('monaco-languageclient/lib/vscode-compatibility');
    return config;
  }
};

module.exports = nextConfig;
