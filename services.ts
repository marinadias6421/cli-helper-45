import axios from 'axios';

export interface CryptoData {
    id: string;
    name: string;
    symbol: string;
    current_price: number;
    market_cap: number;
    total_volume: number;
}

export async function fetchCryptoData(cryptoIds: string[]): Promise<CryptoData[]> {
    const baseUrl = 'https://api.coingecko.com/api/v3/simple/price';
    const ids = cryptoIds.join(',');
    const url = `${baseUrl}?ids=${ids}&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true`;

    try {
        const response = await axios.get(url);
        return Object.entries(response.data).map(([id, data]) => ({
            id,
            name: id,
            symbol: id.toUpperCase(),
            current_price: data.usd,
            market_cap: data.usd_market_cap,
            total_volume: data.usd_24h_vol,
        }));
    } catch (error) {
        console.error('Error fetching crypto data:', error);
        throw new Error('Failed to fetch crypto data');
    }
}