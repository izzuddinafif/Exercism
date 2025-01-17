/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

function cookingStatus(timer) {
    if (timer === undefined) {
        return 'You forgot to set the timer.'
    }
    return timer === 0 ? 'Lasagna is done.' : 'Not done, please wait.'
}
console.log(cookingStatus(12))
console.log(cookingStatus())
console.log(cookingStatus(0))

function preparationTime(layers, avg = 2) {
    return layers.length * avg
}
const layers = ['sauce', 'noodles', 'sauce', 'meat', 'mozzarella', 'noodles'];
console.log(preparationTime(layers, 3))
console.log(preparationTime(layers))

// function quantities1(layers) {
//     return Object.fromEntries(Object.entries(layers).map(([key, val]) => key === 'noodles' ? [key, val*50]: key === 'sauce' ? [key, val*0.2]: [key, val]))
// }

function quantities(layers) {
    return {
        noodles: layers.filter(layer => layer === 'noodles').length * 50,
        sauce: layers.filter(layer => layer === 'sauce').length * 0.2,
    }
}
console.log("quantities", quantities(layers))

function addSecretIngredient(friendsList, myList) {
    myList.push(friendsList[friendsList.length - 1])
}
const friendsList = ['noodles', 'sauce', 'mozzarella', 'kampot pepper'];
const myList = ['noodles', 'meat', 'sauce', 'mozzarella'];
addSecretIngredient(friendsList, myList)
console.log(myList)

function scaleRecipe(recipe, scale) {
    return Object.fromEntries(Object.entries(recipe).map(([key, value])=> [key, value*scale/2]))
}
const recipe = {
    noodles: 200,
    sauce: 0.5,
    mozzarella: 1,
    meat: 100,
};
console.log(scaleRecipe(recipe, 2))

export {cookingStatus, preparationTime, addSecretIngredient, scaleRecipe, quantities}
