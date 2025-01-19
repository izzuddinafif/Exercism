/**
 * Double every card in the deck.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with every card doubled
 */
export function seeingDouble(deck) {
  return deck.map(card=>card*2)
}

/**
 *  Creates triplicates of every 3 found in the deck.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with triplicate 3s
 */
export function threeOfEachThree(deck) {
  return deck.reduce((acc, cur)=> {
    cur === 3 ? acc.push(3,3,3) : acc.push(cur)
    return acc
  }, [])
}
const deck = [1, 3, 9, 3, 7];
console.log(threeOfEachThree(deck));

/**
 * Extracts the middle two cards from a deck.
 * Assumes a deck is always 10 cards.
 *
 * @param {number[]} deck of 10 cards
 *
 * @returns {number[]} deck with only two middle cards
 */
export function middleTwo(deck) {
  return deck.filter((val, idx)=> idx === 4 || idx === 5 ? val: null)
}
const deck1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(middleTwo(deck1));

/**
 * Moves the outside two cards to the middle.
 *
 * @param {number[]} deck with even number of cards
 *
 * @returns {number[]} transformed deck
 */

export function sandwichTrick(deck) {
  deck.splice(deck.length/2, 0, deck[0])
  deck.splice(deck.length/2, 0, deck[deck.length-1])
  deck.splice(deck.length-1, 1)
  deck.splice(0, 1)

  // deck.splice(deck.length/2, 0, deck.pop(), deck.shift())
  return deck
}
const deck2 = [1, 2, 3, 5, 6, 10];
console.log(sandwichTrick(deck2));
/**
 * Removes every card from the deck except 2s.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with only 2s
 */
export function twoIsSpecial(deck) {
  return deck.filter(card=>card===2)
}

/**
 * Returns a perfectly order deck from lowest to highest.
 *
 * @param {number[]} deck shuffled deck
 *
 * @returns {number[]} ordered deck
 */
export function perfectlyOrdered(deck) {
  return deck.sort((a,b)=>a-b)
}

/**
 * Reorders the deck so that the top card ends up at the bottom.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} reordered deck
 */
export function reorder(deck) {
  return deck.reverse()
}
