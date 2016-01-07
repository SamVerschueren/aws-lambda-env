import test from 'ava';
import fn from './';

const latest = {functionVersion: '$LATEST', invokedFunctionArn: 'arn:aws:lambda:us-west-1:123456789:function:aws-lambda-env'};
const production = {functionVersion: '1', invokedFunctionArn: 'arn:aws:lambda:us-west-1:123456789:function:aws-lambda-env:production'};

test('error', t => {
	t.throws(fn.bind(fn), 'Provide a context object');
});

test('result', t => {
	t.notOk(fn(latest));
	t.is(fn(production), 'production');
});
