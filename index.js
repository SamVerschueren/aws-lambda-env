'use strict';
module.exports = function (ctx) {
	if (!ctx || !ctx.invokedFunctionArn) {
		throw new TypeError('Provide a context object');
	}

	if (ctx.functionVersion === '$LATEST') {
		return undefined;
	}

	return ctx.invokedFunctionArn.split(':').pop();
};
