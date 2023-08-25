import api from './api';

export type CategoriesType = 'electronics' | 'jewelery' | `men's clothing` | `women's clothing`;
type Category = Array<CategoriesType>;

export default {
  async index(): Promise<Category> {
    try {
      const response = await api.get(`/categories`);
      return response.data;
    } catch (error) {
      return [];
    }
  },
  async show(category: CategoriesType): Promise<Category | undefined> {
    try {
      const response = await api.get(`/category/${category}`);

      return response.data;
    } catch (error) {
      return undefined;
    }
  },
};
