export const recommendProducts = (products, cart) => {
  if (cart.length === 0) return [];

  const categories = cart.map((item) => item.category);

  return products.filter((p) => categories.includes(p.category)).slice(0, 4);
};
