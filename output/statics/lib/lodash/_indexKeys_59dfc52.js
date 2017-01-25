var baseTimes = require('lib/lodash/_baseTimes'),
    isArguments = require('lib/lodash/isArguments'),
    isArray = require('lib/lodash/isArray'),
    isLength = require('lib/lodash/isLength'),
    isString = require('lib/lodash/isString');

/**
 * Creates an array of index keys for `object` values of arrays,
 * `arguments` objects, and strings, otherwise `null` is returned.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array|null} Returns index keys, else `null`.
 */
function indexKeys(object) {
  var length = object ? object.length : undefined;
  if (isLength(length) &&
      (isArray(object) || isString(object) || isArguments(object))) {
    return baseTimes(length, String);
  }
  return null;
}

module.exports = indexKeys;
