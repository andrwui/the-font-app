export const toValidSVG = (svg: string): string => {
  const cleanPath = svg.replace('<path', '').replace('/>', '')
  const result = `
    <svg width="100" height="100" viewBox="0 -20 110 1" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" fill="#fff" ${cleanPath} />
    </svg>
    `
  return result
}
