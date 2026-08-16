/**
 * Represents a cryptocurrency.
 */
export interface Cryptocurrency {
    /**
     * The unique identifier for the cryptocurrency.
     */
    id: string;

    /**
     * The name of the cryptocurrency.
     */
    name: string;

    /**
     * The symbol used to represent the cryptocurrency.
     */
    symbol: string;

    /**
     * The current price of the cryptocurrency in USD.
     */
    price: number;

    /**
     * The market capitalization of the cryptocurrency.
     */
    marketCap: number;

    /**
     * The total supply of the cryptocurrency.
     */
    totalSupply: number;
}

/**
 * Represents a response from the cryptocurrency API.
 */
export interface ApiResponse {
    /**
     * The status of the API response.
     */
    status: string;

    /**
     * An array of cryptocurrencies.
     */
    data: Cryptocurrency[];
}
