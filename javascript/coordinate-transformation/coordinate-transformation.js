// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Create a function that returns a function making use of a closure to
 * perform a repeatable 2d translation of a coordinate pair.
 *
 * @param {number} dx the translate x component
 * @param {number} dy the translate y component
 *
 * @returns {function} a function which takes an x, y parameter, returns the
 *  translated coordinate pair in the form [x, y]
 */
export function translate2d(dx, dy) {
  return function(x, y) {
    return [x + dx, y + dy]
  }
}
const moveCoordinatesRight2Px = translate2d(2, 0);
console.log(moveCoordinatesRight2Px(4, 8))

/**
 * Create a function that returns a function making use of a closure to
 * perform a repeatable 2d scale of a coordinate pair.
 *
 * @param {number} sx the amount to scale the x component
 * @param {number} sy the amount to scale the y component
 *
 * @returns {function} a function which takes an x, y parameter, returns the
 *  scaled coordinate pair in the form [x, y]
 */
export function scale2d(sx, sy) {
  return function(x, y) {
    return [x*sx, y*sy]
  }
}
const doubleScale = scale2d(2, 2);
console.log(doubleScale(6, -3))

/**
 * Create a composition function that returns a function that combines two
 * functions to perform a repeatable transformation
 *
 * @param {function} f the first function to apply
 * @param {function} g the second function to apply
 *
 * @returns {function} a function which takes an x, y parameter, returns the
 *  transformed coordinate pair in the form [x, y]
 */
export function composeTransform(f, g) {
  return function (x, y) {
    let [a , b] = f(x, y)
    return g(a, b)
  }
};
const doubleCoordinates = scale2d(2, 2);
const composedTransformations = composeTransform(
  moveCoordinatesRight2Px,
  doubleCoordinates,
);
console.log(composedTransformations(0,1))

/**
 * Return a function that memoizes the last result.  If the arguments are the same as the last call,
 * then memoized result returned.
 *
 * @param {function} f the transformation function to memoize, assumes takes two arguments 'x' and 'y'
 *
 * @returns {function} a function which takes x and y arguments, and will either return the saved result
 *  if the arguments are the same on subsequent calls, or compute a new result if they are different.
 */
export function memoizeTransform(f) {
  let cache = new Map()
  return function(x, y) {
    const key = [x, y].toString()
    if (!cache.has(key)) {
      cache = new Map() // only remember the last result
      let result = f(x, y)
      cache.set(key, result)
      console.log("no memo", cache)
      return result
    }
    console.log("memo exists", cache)
    const val = cache.get(key)
    return val
  }
}
const tripleScale = scale2d(3, 3);
const memoizedScale = memoizeTransform(tripleScale);

// console.log("no memo yet", memoizedScale(4, 3)); // => [12, 9], this is computed since it hasn't been computed before for the arguments
// console.log("memoized", memoizedScale(4, 3));

console.log(memoizedScale(1, 2));
console.log(memoizedScale(1, 3));
console.log(memoizedScale(1, 2));
