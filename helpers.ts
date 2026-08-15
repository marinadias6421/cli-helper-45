// Function to generate a random Ethereum address
export function generateRandomEthereumAddress(): string {
    const randomHex = (Math.random() * 0xfffffff * 10000000).toString(16);
    return '0x' + randomHex.padStart(40, '0');
}

// Function to convert a number to Wei
export function toWei(amount: number, unit: string = 'ether'): string {
    const units = {
        wei: 1,
        gwei: 1e9,
        ether: 1e18,
    };
    return (amount * units[unit]).toString();
}

// Function to convert Wei to Ether
export function fromWei(wei: string, unit: string = 'ether'): number {
    const units = {
        wei: 1,
        gwei: 1e9,
        ether: 1e18,
    };
    return parseFloat(wei) / units[unit];
}

// Function to validate an Ethereum address
export function isValidEthereumAddress(address: string): boolean {
    return /^0x[a-fA-F0-9]{40}$/.test(address);
}

// Function to calculate transaction fee
export function calculateTransactionFee(gasPrice: string, gasLimit: number): string {
    const gasPriceInWei = parseFloat(gasPrice);
    const fee = gasPriceInWei * gasLimit;
    return fee.toString();
}
