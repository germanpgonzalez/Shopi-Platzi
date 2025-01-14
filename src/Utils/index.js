/**
 * Función que calcula el precio total de los productos del carrito
 * @param {Array} products cartProducts: array of products
 * @returns {number} sum: el total de la suma de todos los productos del carrito
 */

export const totalPrice = (products) => {
    let sum = 0;
    products.forEach ((product) => sum += product.price);
    return sum;
}