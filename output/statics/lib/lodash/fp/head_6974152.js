var convert = require('lib/lodash/fp/convert'),
    func = convert('head', require('lib/lodash/head'), require('lib/lodash/fp/_falseOptions'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
