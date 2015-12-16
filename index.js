'use strict';
module.exports = function (ctx) {
	if (!ctx || !ctx.invokedFunctionArn) {
		throw new TypeError('Provide a context object');
	}

	var env = ctx.invokedFunctionArn.split(':').pop();

	return env === '$LATEST' ? undefined : env;
};
