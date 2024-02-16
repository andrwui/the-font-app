/* eslint-disable @typescript-eslint/consistent-type-assertions */
/* eslint-disable @typescript-eslint/prefer-reduce-type-parameter */

// The new Object.groupBy is not available in the current electron version i'm in
export const groupBy = <T, K extends keyof any>(
  array: T[],
  key: (item: T) => K,
): Record<K, T[]> => {
  return array.reduce(
    (result, currentItem) => {
      const groupKey = key(currentItem)

      if (!result[groupKey]) {
        result[groupKey] = []
      }

      result[groupKey].push(currentItem)

      return result
    },
    {} as Record<K, T[]>,
  )
}
