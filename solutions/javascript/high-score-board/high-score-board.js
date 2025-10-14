/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Creates a new score board with an initial entry.
 *
 * @returns {Record<string, number>} new score board
 */
export function createScoreBoard() {
   return {
    'The Best Ever': 1_000_000
   }
}

/**
 * Adds a player to a score board.
 *
 * @param {Record<string, number>} scoreBoard
 * @param {string} player
 * @param {number} score
 * @returns {Record<string, number>} updated score board
 */
export function addPlayer(scoreBoard, player, score) {
  return Object.assign(scoreBoard, {[player]:score})
}
console.log(addPlayer({ 'Dave Thomas': 0 }, 'José Valim', 486373))

/**
 * Removes a player from a score board.
 *
 * @param {Record<string, number>} scoreBoard
 * @param {string} player
 * @returns {Record<string, number>} updated score board
 */
export function removePlayer(scoreBoard, player) {
  delete scoreBoard[player]
  return scoreBoard
}
console.log(removePlayer({ 'Dave Thomas': 0 }, 'Dave Thomas'))
console.log(removePlayer({ 'Dave Thomas': 0 }, 'Rose Fanaras'))

/**
 * Increases a player's score by the given amount.
 *
 * @param {Record<string, number>} scoreBoard
 * @param {string} player
 * @param {number} points
 * @returns {Record<string, number>} updated score board
 */
export function updateScore(scoreBoard, player, points) {
  scoreBoard[player] += points
  return scoreBoard
}
console.log(updateScore({ 'Freyja Ćirić': 12771008 }, 'Freyja Ćirić', 73))

/**
 * Applies 100 bonus points to all players on the board.
 *
 * @param {Record<string, number>} scoreBoard
 * @returns {Record<string, number>} updated score board
 */
export function applyMondayBonus(scoreBoard) {
  for(let player in scoreBoard) {
    scoreBoard[player] += 100
  }
  return scoreBoard
}
const scoreBoard = {
  'Dave Thomas': 44,
  'Freyja Ćirić': 539,
  'José Valim': 265,
};

console.log(applyMondayBonus(scoreBoard));

/**
 * Normalizes a score with the provided normalization function.
 *
 * @param {Params} params the parameters for performing the normalization
 * @returns {number} normalized score
 */
export function normalizeScore(params) {
  return params.normalizeFunction(params.score)
}
function normalize(score) {
  return 2 * score + 10;
}

const params = { score: 400, normalizeFunction: normalize };

console.log(normalizeScore(params));