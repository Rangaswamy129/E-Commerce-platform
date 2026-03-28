export const aiSearch = (products, query) => {
  if (!query) return products;

  const q = query.toLowerCase();

  return products.filter((p) => {
    return (
      p.title.toLowerCase().includes(q) ||
      p.brand.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      (q.includes("cheap") && p.price < 30000) ||
      (q.includes("premium") && p.price > 70000) ||
      (q.includes("camera") && p.rating >= 4.5)
    );
  });
};
