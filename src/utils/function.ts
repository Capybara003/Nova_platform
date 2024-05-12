/* eslint-disable @typescript-eslint/no-explicit-any */

type objType = { [key: string]: any }
export function getNestedValue(obj: any, path: string) {
  const keys: string[] = path.split('.')
  let result: any = obj

  for (const key of keys) {
    if (result && Object.prototype.hasOwnProperty.call(result, key)) {
      result = result[key]
    } else {
      return undefined
    }
  }
  return result
}

export const removeEmptyKey = (data: objType): objType => {
  const params = { ...data }
  Object.keys(params).forEach(
    key => (params[key] === undefined || params[key] === '' || params[key] === 0) && delete params[key]
  )
  return params
}
