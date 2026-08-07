export function calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371
  const dLat = ((lat2 - lat1) * Math.PI) / 180
  const dLon = ((lon2 - lon1) * Math.PI) / 180
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  return R * c
}

export function formatDistance(distanceInKM: number): string {
  if (!distanceInKM || distanceInKM === Infinity) return '500 m away'
  if (distanceInKM < 1) {
    const meters = Math.round(distanceInKM * 1000)
    return `${meters < 50 ? 50 : meters} m away`
  }
  return `${distanceInKM.toFixed(1)} km away`
}

export function formatTravelTime(distanceInKM: number): string {
  if (!distanceInKM || distanceInKM === Infinity) return '2 mins walk'
  let durationInMinutes = 0
  let mode = ''

  if (distanceInKM <= 1.5) {
    durationInMinutes = Math.round(distanceInKM * 12)
    mode = 'walk'
  } else {
    durationInMinutes = Math.round(distanceInKM * 3)
    mode = 'drive'
  }

  if (durationInMinutes < 1) durationInMinutes = 1

  if (durationInMinutes >= 60) {
    const hours = Math.floor(durationInMinutes / 60)
    const mins = durationInMinutes % 60
    return mins > 0 ? `${hours} hr ${mins} mins ${mode}` : `${hours} hr ${mode}`
  }

  return `${durationInMinutes} mins ${mode}`
}