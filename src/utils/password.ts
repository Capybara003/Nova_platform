import bcrypt from 'bcrypt'

export function generateOTP() {
  const min = 1000
  const max = 9999
  const pattern = Math.floor(Math.random() * (max - min + 1)) + min
  return pattern.toString()
}

export async function hashPassword(password: string) {
  const saltRounds = 10
  const salt = await bcrypt.genSalt(saltRounds)
  return await bcrypt.hash(password, salt)
}

export async function comparePasswords(plainPassword: string, hashedPassword: string) {
  return await bcrypt.compare(plainPassword, hashedPassword)
}

export async function generatePassword() {
  const characters = 'abc01BCFDE2AIJ34LMG5NOPQRpqvwSTUVZ6klmn7WXY8hidej9fgoHxyzK@rstu'
  let randomString = ''

  for (let i = 0; i < 16; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length)
    randomString += characters.charAt(randomIndex)
  }

  return randomString
}
