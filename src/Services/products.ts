import api from './api';

export type Product = {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
};

export default {
  async index(): Promise<Product[]> {
    try {
      const response = await api.get(`/`);
      return response.data;
    } catch (error) {
      return [];
    }
  },
  async show(productId: string): Promise<Product | undefined> {
    try {
      const response = await api.get(`/${productId}`);
      return response.data;
    } catch (error) {
      return undefined;
    }
  },
};