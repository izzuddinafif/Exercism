// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.
const birds = [2, 5, 0, 7, 4, 1, 3, 0, 2, 5, 0, 1, 3, 1];
/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
  return birdsPerDay.reduce((acc, cur) => acc + cur)
}
console.log(totalBirdCount(birds))
/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {
  // assume weeks are tracked completely (7 days)
  const start = (week-1)*7
  return birdsPerDay.slice(start, start +7).reduce((ac, cu) => ac + cu, 0)
}
console.log(birdsInWeek(birds, 2))

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {number[]} corrected bird count data
 */
export function fixBirdCountLog(birdsPerDay) {
  // const newBirdsPerDay = birdsPerDay.map((el, idx) => idx % 2 === 0 || idx === 0 ? ++el : el)
  birdsPerDay.forEach((elm, idx) => {
    if (idx % 2 === 0 || idx === 0) ++birdsPerDay[idx]
  });
  return birdsPerDay
}
console.log(fixBirdCountLog(birds))
console.log(Object.is(fixBirdCountLog(birds), birds))
