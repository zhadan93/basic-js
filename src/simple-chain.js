const CustomError = require("../extensions/custom-error");

const chainMaker = {
  'linkMas': [],
  getLength() {
    return this.linkMas.length;
  },
  addLink(value) {
    value = value !== undefined ? value : '';
    this.linkMas.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (typeof(position) != 'number' || Math.trunc(position) < position
    || position < 1 || position >= this.getLength()) {
      this.linkMas = [];
      throw new Error("");
    }
    this.linkMas.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.linkMas.reverse();
    return this;
  },
  finishChain() {
    let res = this.linkMas.join('~~');
    this.linkMas = [];
    return res;
  }
};

module.exports = chainMaker;

