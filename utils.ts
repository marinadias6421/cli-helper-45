import { BigNumber } from 'bignumber.js';

/**
 * Converts a given amount from one currency to another using a specified rate.
 * @param amount - The amount to convert.
 * @param rate - The conversion rate.
 * @returns The converted amount as a BigNumber.
 */
export function convertCurrency(amount: number, rate: number): BigNumber {
    return new BigNumber(amount).multipliedBy(rate);
}

/**
 * Formats a number to a specified number of decimal places.
 * @param value - The numeric value to format.
 * @param decimals - The number of decimal places.
 * @returns The formatted string representation of the number.
 */
export function formatNumber(value: number, decimals: number = 2): string {
    return value.toFixed(decimals);
}

/**
 * Checks if the provided string is a valid Ethereum address.
 * @param address - The Ethereum address string.
 * @returns True if valid, otherwise false.
 */
export function isValidEthereumAddress(address: string): boolean {
    const regex = /^0x[a-fA-F0-9]{40}$/;
    return regex.test(address);
}

/**
 * Retrieves the current timestamp in seconds.
 * @returns The current timestamp.
 */
export function getCurrentTimestamp(): number {
    return Math.floor(Date.now() / 1000);
}
