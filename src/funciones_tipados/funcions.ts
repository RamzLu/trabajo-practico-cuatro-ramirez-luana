function updateStock(currentStock: number, quantityChange: number): number {
  return currentStock + quantityChange;
}
const result = updateStock(300, 10);

console.log(result);
