export const formatUSei = (usei: string): number => {
  const sei = usei ? usei.replace('usei', '') : 0
  return Number(sei) / 1e6
}
