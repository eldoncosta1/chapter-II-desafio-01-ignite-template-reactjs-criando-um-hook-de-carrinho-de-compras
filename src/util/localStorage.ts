import { Product } from '../types';

export const getCart = () => {
  const storagedCart = localStorage.getItem('@RocketShoes:cart');
  if (storagedCart) {
    return JSON.parse(storagedCart);
  }

  return [];
}

export const setItemCart = (products: Product[]) => {
  localStorage.setItem('@RocketShoes:cart', JSON.stringify(products));
}

export const getItemById = (productId: number) => {
  const cart = getCart();
  return cart.filter((product: Product) => product.id === productId);
}
