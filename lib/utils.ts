/** Convert grosze (integer) to display string: 14900 → "149.00 PLN" */
export function formatPrice(grosze: number): string {
  return (grosze / 100).toFixed(2) + " PLN";
}
