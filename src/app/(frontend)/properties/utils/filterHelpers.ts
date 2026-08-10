/**
 * Toggles a value inside an array.
 * If the value exists, it removes it. If not, it adds it.
 */
export const toggleArrayValue = <T>(arr: T[] = [], value: T): T[] => {
  if (!Array.isArray(arr)) return [value]
  if (arr.includes(value)) {
    return arr.filter((item) => item !== value)
  }
  return [...arr, value]
}

/**
 * Helper to format price values into INR Lakhs/Crores display
 */
export const formatPrice = (amount: number): string => {
  if (!amount || isNaN(amount)) return '₹0'
  if (amount >= 10000000) {
    return `₹${(amount / 10000000).toFixed(2)} Cr`
  }
  if (amount >= 100000) {
    return `₹${(amount / 100000).toFixed(2)} L`
  }
  return `₹${amount.toLocaleString('en-IN')}`
}