import api from './api';

export type ProductType = {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
};

export default {
  async index(): Promise<ProductType[]> {
    try {
      const response = await api.get(`/`);
      return response.data;
    } catch (error) {
      return [];
    }
  },
  async show(productId: number): Promise<ProductType | undefined> {
    try {
      const response = await api.get(`/${productId}`);
      return response.data;
    } catch (error) {
      return undefined;
    }
  },
};