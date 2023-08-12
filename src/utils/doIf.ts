export function doIf(condition: boolean, content: any, or?: any) {
  if (or) {
    return condition ? content : or;
  } else {
    return condition && content;
  }
}
