const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const filesCollection = {};
  const mas = [];
  let modificationName = '';

  names.forEach(name => {
    if (name in filesCollection) {
      modificationName = `${name}(${filesCollection[name]})`;
      mas.push(modificationName);
      filesCollection[modificationName] = 1;
      filesCollection[name] += 1;
    } else {
      filesCollection[name] = 1;
      mas.push(name);
    }
  })
 
  return mas;
}

module.exports = {
  renameFiles
};
