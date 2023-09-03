export function calculatePercent(pixel: number, windowWidth: number) {
  const result = (pixel * 100) / windowWidth;
  return result;
}

export function getPixel(
  percent: number,
  windowWidth: number,
  containerWidth: number
) {
  const proportionWidth = containerWidth - windowWidth;
  const result = (percent * proportionWidth) / 100;
  return result;
}
