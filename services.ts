import axios, { AxiosRequestConfig } from 'axios';

interface ApiResponse<T> {
  data: T;
  status: number;
}

const BASE_URL = 'https://api.example.com';

const fetchCryptoData = async (coin: string): Promise<ApiResponse<any>> => {
  const config: AxiosRequestConfig = {
    headers: { 'Content-Type': 'application/json' },
    params: { coin },
  };
  try {
    const response = await axios.get(`${BASE_URL}/cryptodata`, config);
    return { data: response.data, status: response.status };
  } catch (error) {
    throw new Error(`Error fetching data: ${error.message}`);
  }
};

const processCryptoData = (data: any): any => {
  // Perform some processing on the data
  return data.map((item: any) => ({ id: item.id, price: item.price }));
};

export const getCryptoInfo = async (coin: string): Promise<any> => {
  const response = await fetchCryptoData(coin);
  return processCryptoData(response.data);
};
