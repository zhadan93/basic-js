const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(machineModification = true) {
    this.machineModification = machineModification;
    this.latinAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  }
  encrypt(message, key) {
    if (!message || !key) throw new Error('');

    /*Приведение к верхнему регистру*/
    let modificatedMassege = message.toUpperCase().split('');
    let modificatedKey = key.toUpperCase();
    let keyIndex = 0;
    let res = [];

    /*Формула кодирования
    с = (m + k) % n
    m - буква сообщения,
    k - буква ключа,
    n - количество символов в словаре*/
    for (let char of modificatedMassege) {
      if (this.latinAlphabet.indexOf(char) != -1) {
        res.push( this.latinAlphabet.charAt((char.charCodeAt(0) + modificatedKey.charCodeAt(keyIndex)) % 26) );
        keyIndex == modificatedKey.length - 1 ? keyIndex = 0 : keyIndex++;
      } else {
        res.push(char);
      }
    }

    return this.machineModification ? res.join('') : res.reverse().join('');
  }

  /*Формула кодирования
    m = (c + n - k) % n
    c - буква зашифрованного сообщения,
    k - буква ключа,
    n - количество символов в словаре*/
  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) throw new Error('');

    let modificatedKey = key.toUpperCase();
    let keyIndex = 0;
    let res = [];

    for (let char of encryptedMessage) {
      if (this.latinAlphabet.indexOf(char) != -1) {
        res.push( this.latinAlphabet.charAt((char.charCodeAt(0) + 26 - modificatedKey.charCodeAt(keyIndex)) % 26) );
        keyIndex == modificatedKey.length - 1 ? keyIndex = 0 : keyIndex++;
      } else {
        res.push(char);
      }
    }

    return this.machineModification ? res.join('') : res.reverse().join('');
  }
}

module.exports = VigenereCipheringMachine;
