type CryptoResponse = { id: string; name: string; symbol: string; rank: number; price_usd: string; }; 

const fetchCryptocurrencyData = async (id: string): Promise<CryptoResponse> => { 
    const response = await fetch(`https://api.coinmarketcap.com/v1/cryptocurrency/${id}`); 
    if (!response.ok) { 
        throw new Error(`Error fetching data for ${id}: ${response.statusText}`); 
    } 
    const data: CryptoResponse = await response.json(); 
    return data; 
}; 

const formatCryptoData = (data: CryptoResponse): string => { 
    return `Cryptocurrency: ${data.name} (${data.symbol}), Rank: ${data.rank}, Price: $${parseFloat(data.price_usd).toFixed(2)}`; 
}; 

const logCryptoData = async (id: string): Promise<void> => { 
    try { 
        const data = await fetchCryptocurrencyData(id); 
        console.log(formatCryptoData(data)); 
    } catch (error) { 
        console.error(error); 
    } 
}; 

export { fetchCryptocurrencyData, formatCryptoData, logCryptoData };