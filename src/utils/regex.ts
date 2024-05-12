export const EmailregEx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
export const PassRegEx = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&=',"(+\-_)`~:;"',./<>])[\s\S]{6,}$/i

// Contains at least one uppercase letter ((?=.*[A-Z]))
// Contains at least one lowercase letter ((?=.*[a-z]))
// Contains at least one digit ((?=.*\d))
// Contains at least one special character from your list ((?=.*[@$!%*?&=',"(+\-_)]))
// Has a minimum length of 6 characters ([\s\S]{6,})
