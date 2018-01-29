import test from 'ava';
import fn from './';

const latest = {functionVersion: '$LATEST', invokedFunctionArn: 'arn:aws:lambda:us-west-1:123456789:function:aws-lambda-env'};
const v1 = {functionVersion: '1', invokedFunctionArn: 'arn:aws:lambda:us-west-1:123456789:function:aws-lambda-env:1'};
const production = {functionVersion: '1', invokedFunctionArn: 'arn:aws:lambda:us-west-1:123456789:function:aws-lambda-env:production'};

test('error', t => {
	t.throws(fn.bind(fn), 'Provide a context object');
});

test('result', t => {
	t.is(fn(latest), 'development');
	t.is(fn(latest, {$LATEST: 'latest'}), 'latest');
	t.is(fn(latest, {$LATEST: undefined}), 'production');
	t.falsy(fn(latest, {$LATEST: undefined, default: undefined}));
	t.is(fn(v1), 'production');
	t.is(fn(v1, {default: undefined}), '1');
	t.is(fn(v1, {1: 'development'}), 'development');
	t.is(fn(production), 'production');
});
