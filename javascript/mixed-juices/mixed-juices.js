// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

import { time } from "console"

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  switch (name) {
    case 'Pure Strawberry Joy':
      return 0.5
    case 'Tropical Island':
      return 3
    case 'All or Nothing':
      return 5
    case 'Energizer':
    case 'Green Garden':
      return 1.5
    default:
      return 2.5
  }
}
console.log(timeToMixJuice('Energizer'));
/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  let i = 0, w = 0;
  while (w < wedgesNeeded) {
    if (limes.length == i) break;
    i++
    switch (limes[i - 1]) {
      case 'small':
        w += 6;
        break;
      case 'medium':
        w += 8;
        break;
      case 'large':
        w += 10;
        break;
    }
  }

  return i
}
console.log(limesToCut(25, ['small', 'small', 'large', 'medium', 'small']))

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  if (!orders) return []
  let totalTime = 0, i = 0;
  while (totalTime < timeLeft) {
    totalTime += timeToMixJuice(orders[i])
    ++i
  }
  // console.log(i, orders.slice(i), totalTime, "<=", timeLeft)
  return orders.slice(i)
}
console.log(remainingOrders(7, [
  'Tropical Island', // 3
  'Energizer', // 1.5
  'Limetime', // 2.5
  'All or Nothing', // 5
  'Pure Strawberry Joy', // 0.5
]));
