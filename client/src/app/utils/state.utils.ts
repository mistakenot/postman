
export function copy<T>(original: T, updates: any): T {
  let copy = Object.assign({}, original, updates);
  return <T>copy;
}