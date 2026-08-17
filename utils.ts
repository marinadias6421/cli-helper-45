// A helper function to calculate the average of an array of numbers
export function calculateAverage(values: number[]): number {
    const total = values.reduce((sum, value) => sum + value, 0);
    return values.length ? total / values.length : 0;
}

// A function to filter out invalid crypto prices
export function filterValidPrices(prices: { [key: string]: number }): { [key: string]: number } {
    const filtered: { [key: string]: number } = {};
    for (const [key, value] of Object.entries(prices)) {
        if (value > 0) {
            filtered[key] = value;
        }
    }
    return filtered;
}

// A function to round numbers to a specified decimal place
export function roundTo(value: number, decimalPlaces: number): number {
    if (!isFinite(value)) return 0;
    const factor = Math.pow(10, decimalPlaces);
    return Math.round(value * factor) / factor;
}

// A function to get percentage change
export function percentageChange(oldValue: number, newValue: number): number {
    if (oldValue === 0) return 0;
    return ((newValue - oldValue) / Math.abs(oldValue)) * 100;
}

// A function to format currency values
export function formatCurrency(value: number, currencySymbol: string = '$'): string {
    return `${currencySymbol}${value.toFixed(2)}`;
}