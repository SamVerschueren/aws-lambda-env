'use strict';

// module dependencies
var test = require('ava'),
    assert = require('assert'),
    env = require('./');

test('Return staging environment if the name is \'staging_MyLambdaFunction\'', function(t) {
    process.env.AWS_LAMBDA_FUNCTION_NAME = 'staging_MyLambdaFunction';

    assert(env(), 'staging');

    t.end();
});

test('Return staging environment if the name is \'Staging_MyLambdaFunction\'', function(t) {
    process.env.AWS_LAMBDA_FUNCTION_NAME = 'Staging_MyLambdaFunction';

    assert(env(), 'staging');

    t.end();
});

test('Return undefined if the name is \'MyLambdaFunction\'', function(t) {
    process.env.AWS_LAMBDA_FUNCTION_NAME = 'Staging_MyLambdaFunction';

    assert(env(), undefined);

    t.end();
});

test('Return staging environment if the name is \'staging:MyLambdaFunction\' and delimiter is set to \':\'', function(t) {
    process.env.AWS_LAMBDA_FUNCTION_NAME = 'staging:MyLambdaFunction';

    assert(env(':'), 'staging');

    t.end();
});