import fs from 'fs';
import path from 'path';

interface Config {
    rpcUrl: string;
    network: string;
    apiKey: string;
}

const defaultConfig: Config = {
    rpcUrl: 'https://default.rpc.url',
    network: 'mainnet',
    apiKey: 'default-api-key',
};

function loadConfig(configFilePath: string): Config {
    const fullPath = path.resolve(__dirname, configFilePath);
    if (fs.existsSync(fullPath)) {
        const userConfig = JSON.parse(fs.readFileSync(fullPath, 'utf-8'));
        return { ...defaultConfig, ...userConfig };
    }
    return defaultConfig;
}

export { loadConfig, Config };