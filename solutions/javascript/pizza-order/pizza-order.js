/// <reference path="./global.d.ts" />
//
// @ts-check

/**
 * Determine the price of the pizza given the pizza and optional extras
 *
 * @param {Pizza} pizza name of the pizza to be made
 * @param {Extra[]} extras list of extras
 *
 * @returns {number} the price of the pizza
 */
export function pizzaPrice(pizza, ...extras) {
  
  const piz = {'Margherita':7, 'Caprese': 9, 'Formaggio':10}
  const ext = {'ExtraToppings': 2, 'ExtraSauce': 1}

  if (extras.length === 0) {
    return piz[pizza]
  }
  return ext[extras[0]] + pizzaPrice(pizza, ...extras.splice(1))
}
console.log(pizzaPrice('Margherita'),
// => 7

pizzaPrice('Caprese', 'ExtraSauce', 'ExtraToppings'),
// => 12

pizzaPrice(
  'Caprese',
  'ExtraToppings',
  'ExtraToppings',
  'ExtraToppings',
  'ExtraToppings',
)
);


/**
 * Calculate the price of the total order, given individual orders
 *
 * (HINT: For this exercise, you can take a look at the supplied "global.d.ts" file
 * for a more info about the type definitions used)
 *
 * @param {PizzaOrder[]} pizzaOrders a list of pizza orders
 * @returns {number} the price of the total order
 */
export function orderPrice(pizzaOrders) {
  const cost = {'Margherita':7, 'Caprese': 9, 'Formaggio':10, 'ExtraToppings': 2, 'ExtraSauce': 1}
  if (pizzaOrders.length === 0) return 0
  return pizzaOrders.reduce((acc, cur)=> {
    acc += cost[cur.pizza]
    if (cur.extras.length !== 0) acc += cur.extras.reduce((ac, cu) => ac + cost[cu], 0)
    return acc
  }, 0)
}