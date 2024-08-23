export const formatPrice = (price) => {
  const number = Number(price);
  return new Intl.NumberFormat("fa-IR").format(number);
};
