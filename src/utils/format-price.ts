export const formatPrice = (price: number) => {
  const valorEmReais = price / 100;
  return valorEmReais.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
};
