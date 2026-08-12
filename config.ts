// Configuration interface to define settings
interface Config {
    apiUrl: string;
    timeout: number;
    retries: number;
}

// Default configuration values
const defaultConfig: Config = {
    apiUrl: "https://api.defaultcrypto.com",
    timeout: 5000,
    retries: 3,
};

// Function to load configuration with defaults
function loadConfig(customConfig: Partial<Config>): Config {
    return { ...defaultConfig, ...customConfig };
}

// Export the loadConfig function to be used elsewhere
export { loadConfig, Config };