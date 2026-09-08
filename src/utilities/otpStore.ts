interface OTPData {
  otp: string
  expiresAt: number
}

const globalStore = globalThis as unknown as {
  otpStore?: Map<string, OTPData>
}

const store = globalStore.otpStore || new Map<string, OTPData>()
if (process.env.NODE_ENV !== 'production') {
  globalStore.otpStore = store
}

export const setStoredOTP = (mobile: string, otp: string, ttlSeconds = 600) => {
  store.set(mobile, {
    otp,
    expiresAt: Date.now() + ttlSeconds * 1000,
  })
}

export const verifyStoredOTP = (mobile: string, otpInput: string): boolean => {
  const data = store.get(mobile)
  if (!data) return false
  if (Date.now() > data.expiresAt) {
    store.delete(mobile)
    return false
  }
  if (data.otp === otpInput) {
    store.delete(mobile)
    return true
  }
  return false
}
