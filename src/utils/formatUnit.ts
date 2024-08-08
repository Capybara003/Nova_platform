export const formatUSei = (usei: string): number => {
  const sei = usei ? usei.replace('usei', '') : 0
  return Number(sei) / 1e6
}

export const formatUnits = (value: string | number, decimal: string | number): number => {
  const parsedValue = parseFloat(value.toString())

  return parsedValue / 10 ** Number(decimal)
}
