export const isValidProductName = (name) => name.length >= 2;
export const isValidEmailAdress = (email) => email.includes("@");
export const isValidPrice = (price) => !price.includes(".");

const isValidProduct = (product) =>
  isValidProductName(product.name) &&
  isValidEmailAdress(product.supportContact) &&
  isValidPrice(product.price);

export default isValidProduct;
