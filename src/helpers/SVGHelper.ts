export const toValidSVG = (svg: string): string => {
  const cleanPath = svg.replace('<path', '').replace('/>', '')
  const result = `
    <svg width="21" height="21" viewBox="-5 -20 65 1" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" fill="#fff" ${cleanPath} />
    </svg>
    `
  return result
}
