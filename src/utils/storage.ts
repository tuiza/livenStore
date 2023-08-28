import AsyncStorage from '@react-native-async-storage/async-storage';
import {CartType} from 'contexts/ProductContext';

export async function getStoragedData(key: string) {
  const response = await AsyncStorage.getItem(key);
  const storagedData = response ? JSON.parse(response) : [];
  return storagedData;
}

export async function storeData(key: string, data: any) {
  await AsyncStorage.setItem(key, JSON.stringify(data));
}

//salvar um novo filme

export async function saveProduct(key: string, newProduct: CartType) {
  let productsStored = await getStoragedData(key);

  //se tiver algum filme salvo com esse msm ID/ ou duplicado precisamos ignorar
  const hasProduct = productsStored.some(
    (item: CartType) => item.id === newProduct.id,
  );

  if (hasProduct) {
    console.log('Esse produto já existe na carrinho');
    return;
  }

  productsStored.push(newProduct);

  storeData(key, productsStored);
  console.log('Filme salvo com sucesso');
}

// Deletar

export async function deleteProduct(id: number) {
  let productsStored = await getStoragedData('@cart');

  let products = productsStored.filter((item: CartType) => {
    return item.id !== id;
  });

  await AsyncStorage.setItem('@cart', JSON.stringify(products));
  console.log('Filme deletado com sucesso');
  return products;
}

//filtrar

export async function hasProducts(product: CartType) {
  let productsStored = await getStoragedData('@cart');

  const hasProduct = productsStored.find(
    (productStored: CartType) => product.id === productStored.id,
  );

  if (hasProduct) {
    return true;
  }
  return false;
}
