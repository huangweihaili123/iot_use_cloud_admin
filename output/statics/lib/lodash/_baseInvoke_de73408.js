var apply = require('lib/lodash/_apply'),
    castPath = require('lib/lodash/_castPath'),
    isKey = require('lib/lodash/_isKey'),
    last = require('lib/lodash/last'),
    parent = require('lib/lodash/_parent'),
    toKey = require('lib/lodash/_toKey');

/**
 * The base implementation of `_.invoke` without support for individual
 * method arguments.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the method to invoke.
 * @param {Array} args The arguments to invoke the method with.
 * @returns {*} Returns the result of the invoked method.
 */
function baseInvoke(object, path, args) {
  if (!isKey(path, object)) {
    path = castPath(path);
    object = parent(object, path);
    path = last(path);
  }
  var func = object == null ? object : object[toKey(path)];
  return func == null ? undefined : apply(func, object, args);
}

module.exports = baseInvoke;
