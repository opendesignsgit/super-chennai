/**
 * Converts camelCase, snake_case, or hyphenated strings into capitalized Title Case labels.
 * Example: 'under_construction' -> 'Under Construction'
 */
export function formatLabel(str: string | number | null | undefined): string {
  if (str === null || str === undefined) return ''
  const input = String(str).trim()

  if (!input) return ''

  // Replace underscores, hyphens, and camelCase boundaries with spaces
  const spaced = input
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/[_-]+/g, ' ')

  // Capitalize each word
  return spaced
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ')
}