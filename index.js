'use strict';
var objectAssign = require('object-assign');
module.exports = function (ctx, opts) {
	if (!ctx || !ctx.invokedFunctionArn) {
		throw new TypeError('Provide a context object');
	}

	opts = objectAssign({
		$LATEST: 'staging',
		default: 'production'
	}, opts);

	if (ctx.functionVersion === '$LATEST') {
		return opts.$LATEST || opts.default;
	}

	var version = ctx.invokedFunctionArn.split(':').pop();

	return opts[version] || opts.default || version;
};
