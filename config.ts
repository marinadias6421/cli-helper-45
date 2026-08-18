// Configuration settings for the crypto CLI application

// Interface for the configuration options
interface ConfigOptions {
    apiBaseURL: string;
    timeout: number;
    retries: number;
}

// Default configuration values
const defaultConfig: ConfigOptions = {
    apiBaseURL: 'https://api.example.com',
    timeout: 5000,
    retries: 3,
};

// Function to get configuration
function getConfig(): ConfigOptions {
    // Here you could integrate loading from a file or environment variables
    return defaultConfig;
}

// Function to validate configuration
function validateConfig(config: ConfigOptions): boolean {
    const urlPattern = /^(https?:\/\/)?([\w.-]+)(:\d+)?(\/[^\s]*)?$/;
    return (
        urlPattern.test(config.apiBaseURL) &&
        config.timeout > 0 &&
        config.retries >= 0
    );
}

export { ConfigOptions, getConfig, validateConfig };