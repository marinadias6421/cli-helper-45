import axios from 'axios';

// Base URL for cryptocurrency API
dconst BASE_URL = 'https://api.coingecko.com/api/v3';

// Function to fetch cryptocurrency price
export const fetchCryptoPrice = async (id: string): Promise<number> => {
    try {
        const response = await axios.get(`${BASE_URL}/simple/price?ids=${id}&vs_currencies=usd`);
        return response.data[id].usd;
    } catch (error) {
        console.error('Error fetching price:', error);
        throw new Error('Failed to fetch the cryptocurrency price');
    }
};

// Function to get the list of cryptocurrencies
export const fetchCryptoList = async (): Promise<string[]> => {
    try {
        const response = await axios.get(`${BASE_URL}/coins/list`);
        return response.data.map((coin: { id: string }) => coin.id);
    } catch (error) {
        console.error('Error fetching crypto list:', error);
        throw new Error('Failed to fetch the cryptocurrency list');
    }
};

// Function to fetch historical data
export const fetchHistoricalData = async (id: string, days: number): Promise<any[]> => {
    try {
        const response = await axios.get(`${BASE_URL}/coins/${id}/market_chart?vs_currency=usd&days=${days}`);
        return response.data.prices;
    } catch (error) {
        console.error('Error fetching historical data:', error);
        throw new Error('Failed to fetch historical data');
    }
};