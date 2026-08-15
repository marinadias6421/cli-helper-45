import axios from 'axios';

const BASE_URL = 'https://api.coingecko.com/api/v3';

/**
 * Fetches the current price of a given cryptocurrency.
 * @param {string} id - The id of the cryptocurrency (e.g., 'bitcoin').
 * @param {string} currency - The currency to convert into (e.g., 'usd').
 * @returns {Promise<number>} - The current price of the cryptocurrency.
 */
export const fetchCurrentPrice = async (id: string, currency: string): Promise<number> => {
    try {
        const response = await axios.get(`${BASE_URL}/simple/price`, {
            params: { ids: id, vs_currencies: currency }
        });
        return response.data[id][currency];
    } catch (error) {
        console.error('Error fetching current price:', error);
        throw new Error('Failed to fetch current price');
    }
};

/**
 * Fetches historical data for a given cryptocurrency.
 * @param {string} id - The id of the cryptocurrency (e.g., 'bitcoin').
 * @param {string} currency - The currency to convert into (e.g., 'usd').
 * @param {string} days - The number of days back to retrieve (e.g., '30').
 * @returns {Promise<any>} - Historical price data.
 */
export const fetchHistoricalData = async (id: string, currency: string, days: string): Promise<any> => {
    try {
        const response = await axios.get(`${BASE_URL}/coins/${id}/market_chart`, {
            params: { vs_currency: currency, days }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching historical data:', error);
        throw new Error('Failed to fetch historical data');
    }
};

/**
 * Converts a given amount from one cryptocurrency to another using the current prices.
 * @param {number} amount - The amount to convert.
 * @param {string} fromId - The id of the cryptocurrency to convert from.
 * @param {string} toId - The id of the cryptocurrency to convert to.
 * @returns {Promise<number>} - The converted amount.
 */
export const convertCrypto = async (amount: number, fromId: string, toId: string): Promise<number> => {
    const fromPrice = await fetchCurrentPrice(fromId, 'usd');
    const toPrice = await fetchCurrentPrice(toId, 'usd');
    return (amount * fromPrice) / toPrice;
};
