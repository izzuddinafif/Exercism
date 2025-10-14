// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  return array1.reduce((ac, cu)=> Number(ac+String(cu))) + array2.reduce((ac, cu)=> Number(ac+String(cu))) 
}
console.log(twoSum([1, 2, 3], [0, 3]))

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  return String(value).split('').reverse().join('') === String(value)
}
console.log(luckyNumber(142413))

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  return String(input) === 'null' || String(input) === 'undefined' || input === '' ? 'Required field' : isNaN(Number(input)) || Number(input) === 0 ? 'Must be a number besides 0' : ''
}
console.log(errorMessage('123'))
console.log(errorMessage(''))
console.log(errorMessage('abc'))