const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(machineModification = true) {
    this.machineModification = machineModification;
    this.latinAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }

  encrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');

    // Write a message and key in capital letters
    const modificationMessage = message.toUpperCase();
    const modificationKey = key.toUpperCase();
    
    let keyIndex = 0;
    let result = [];

    // Encrypt formula
    // с = (m + k) % n
    // m - ASCII codes of message letter,
    // k - ASCII codes of key letter,
    // n - number of letters in the dictionary

    for (let character of modificationMessage) {
      if (this.latinAlphabet.includes(character)) {
        result.push(this.latinAlphabet.charAt((character.charCodeAt(0) + modificationKey.charCodeAt(keyIndex)) % this.latinAlphabet.length));
        keyIndex == modificationKey.length - 1 ? keyIndex = 0 : keyIndex++;
      } else {
        result.push(character);
      }
    }
    
    return this.machineModification ? result.join('') : result.reverse().join('');
  }
  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) throw new Error('Incorrect arguments!');

    let modificationKey = key.toUpperCase();
    let keyIndex = 0;
    let result = [];

    // Decrypt formula
    // m = (c + n - k) % n
    // c - ASCII codes of encrypted message letter,
    // k - ASCII codes of key letter,
    // n - number of letters in the dictionary

    for (let character of encryptedMessage) {
      if (this.latinAlphabet.indexOf(character) != -1) {
        result.push(this.latinAlphabet.charAt((character.charCodeAt(0) + this.latinAlphabet.length - modificationKey.charCodeAt(keyIndex)) % this.latinAlphabet.length));
        keyIndex == modificationKey.length - 1 ? keyIndex = 0 : keyIndex++;
      } else {
        result.push(character);
      }
    }

    return this.machineModification ? result.join('') : result.reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
