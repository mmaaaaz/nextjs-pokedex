// eslint-disable-next-line no-unused-vars
export default function rangeMap(n: number, fn: (i: number) => any): any[] {
  const arr = []
  while (n > arr.length) {
    arr.push(fn(arr.length))
  }
  return arr
}
