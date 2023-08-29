import { useState } from 'react';
import api from './api';
import { getStoragedData } from 'src/utils/storage';

export type ProductType = {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
  liked: boolean;
};

export default {
  async index(): Promise<ProductType[]> {
    try {
      const response = await api.get(`/`);
      const productsWithLike = response.data.map((product:ProductType )  => ({
        ...product,
        liked: false,
      }));
      return productsWithLike;
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