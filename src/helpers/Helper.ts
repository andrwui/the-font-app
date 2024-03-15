/* eslint-disable @typescript-eslint/consistent-type-assertions */
/* eslint-disable @typescript-eslint/prefer-reduce-type-parameter */

// The new Object.groupBy is not available in the current electron version i'm in
export const groupBy = <T, K extends keyof T>(
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

type ObjectFilterCondition<T> = (entry: [string, T]) => boolean

export const objectFilter: <T>(
  obj: Record<string, T>,
  cond: ObjectFilterCondition<T>,
) => Record<string, T> = (obj, cond) =>
  Object.fromEntries(Object.entries(obj).filter(cond))
