var convert = require('lib/lodash/fp/convert'),
    func = convert('partialRight', require('lib/lodash/partialRight'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
