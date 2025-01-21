
/**
 * Given a certain command, help the chatbot recognize whether the command is valid or not.
 *
 * @param {string} command
 * @returns {boolean} whether or not is the command valid
 */

export function isValidCommand(command) {
  return new RegExp(/^chatbot/, 'gi').test(command)
}

/**
 * Given a certain message, help the chatbot get rid of all the emoji's encryption through the message.
 *
 * @param {string} message
 * @returns {string} The message without the emojis encryption
 */
export function removeEmoji(message) {
  let reg = new RegExp(/(emoji[0-9]*)/g)
  return message.replace(reg, '')
}
console.log(removeEmoji("I love playing videogames emoji3465 it's one of my hobbies"));
/**
 * Given a certain phone number, help the chatbot recognize whether it is in the correct format.
 *
 * @param {string} number
 * @returns {string} the Chatbot response to the phone Validation
 */
export function checkPhoneNumber(number) {
  const reg = new  RegExp(/\(\+[0-9]{2}\)\s*[0-9]{3}-[0-9]{3}-[0-9]{3}/g)
  return reg.test(number) ? "Thanks! You can now download me to your phone." : `Oops, it seems like I can't reach out to ${number}`
}
console.log(checkPhoneNumber('(+34) 659-771-594'),
// => "Thanks! You can now download me to your phone."
checkPhoneNumber('659-771-594'))


/**
 * Given a certain response from the user, help the chatbot get only the URL.
 *
 * @param {string} userInput
 * @returns {string[] | null} all the possible URL's that the user may have answered
 */
export function getURL(userInput) {
  const reg = new RegExp(/[a-z]+\.[a-z]{2,3}/g)
  return userInput.match(reg)
}
console.log(getURL('I learned a lot from exercism.org'));

/**
 * Greet the user using the full name data from the profile.
 *
 * @param {string} fullName
 * @returns {string} Greeting from the chatbot
 */
export function niceToMeetYou(fullName) {
  const reg = new RegExp(/(\w+),\s*(\w+)/g)
  return fullName.replace(reg, 'Nice to meet you, $2 $1')
}
let str = 'Smith, John';
console.log(niceToMeetYou(str))