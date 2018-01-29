'use strict';
module.exports = (ctx, opts) => {
	if (!ctx || !ctx.invokedFunctionArn) {
		throw new TypeError('Provide a context object');
	}

	opts = Object.assign({
		$LATEST: 'development',
		default: 'production'
	}, opts);

	if (ctx.functionVersion === '$LATEST') {
		return opts.$LATEST || opts.default;
	}

	const version = ctx.invokedFunctionArn.split(':').pop();

	return opts[version] || opts.default || version;
};
