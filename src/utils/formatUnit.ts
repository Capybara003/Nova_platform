export const formatUSei = (usei: string): number => {
  const sei = usei.replace('usei', '')
  return Number(sei) / 1e6
}
