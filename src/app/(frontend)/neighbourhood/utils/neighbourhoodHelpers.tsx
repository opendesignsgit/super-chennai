export function normalize(str: string = ''): string {
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]/g, '')
    .replace(/aa|ah/g, 'a')
    .replace(/ee|eh/g, 'e')
    .replace(/oo|oh/g, 'o')
    .replace(/th/g, 't')
    .replace(/dh/g, 'd')
}

export function getDistance(a: string = '', b: string = ''): number {
  const matrix: number[][] = Array.from(
    { length: b.length + 1 },
    () => Array(a.length + 1).fill(0),
  )

  for (let i = 0; i <= b.length; i++) {
    matrix[i]![0] = i
  }

  for (let j = 0; j <= a.length; j++) {
    matrix[0]![j] = j
  }

  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      matrix[i]![j] =
        b[i - 1] === a[j - 1]
          ? matrix[i - 1]![j - 1]!
          : Math.min(
              matrix[i - 1]![j - 1]! + 1,
              matrix[i]![j - 1]! + 1,
              matrix[i - 1]![j]! + 1,
            )
    }
  }

  return matrix[b.length]![a.length]!
}