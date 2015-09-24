'use strict';

// module dependencies
var test = require('ava'),
    env = require('./');

// default
test('Return staging environment if the name is \'staging_MyLambdaFunction\'', function(t) {
    process.env.AWS_LAMBDA_FUNCTION_NAME = 'staging_MyLambdaFunction';

    t.is(env(), 'staging');

    t.end();
});

test('Return staging environment if the name is \'Staging_MyLambdaFunction\'', function(t) {
    process.env.AWS_LAMBDA_FUNCTION_NAME = 'Staging_MyLambdaFunction';

    t.is(env(), 'staging');

    t.end();
});

test('Return undefined if the name is \'MyLambdaFunction\'', function(t) {
    process.env.AWS_LAMBDA_FUNCTION_NAME = 'MyLambdaFunction';

    t.is(env(), undefined);

    t.end();
});

test('Return staging environment if the name is \'staging:MyLambdaFunction\' and delimiter is set to \':\'', function(t) {
    process.env.AWS_LAMBDA_FUNCTION_NAME = 'staging:MyLambdaFunction';

    t.is(env(':'), 'staging');

    t.end();
});


// prefix
test('Prefix::Return staging environment if the name is \'staging_MyLambdaFunction\'', function(t) {
    process.env.AWS_LAMBDA_FUNCTION_NAME = 'staging_MyLambdaFunction';

    t.is(env.prefix(), 'staging');

    t.end();
});

test('Prefix::Return staging environment if the name is \'Staging_MyLambdaFunction\'', function(t) {
    process.env.AWS_LAMBDA_FUNCTION_NAME = 'Staging_MyLambdaFunction';

    t.is(env.prefix(), 'staging');

    t.end();
});

test('Prefix::Return undefined if the name is \'MyLambdaFunction\'', function(t) {
    process.env.AWS_LAMBDA_FUNCTION_NAME = 'MyLambdaFunction';

    t.is(env.prefix(), undefined);

    t.end();
});

test('Prefix::Return staging environment if the name is \'staging:MyLambdaFunction\' and delimiter is set to \':\'', function(t) {
    process.env.AWS_LAMBDA_FUNCTION_NAME = 'staging:MyLambdaFunction';

    t.is(env.prefix(':'), 'staging');

    t.end();
});

// suffix
test('Suffix::Return staging environment if the name is \'staging_MyLambdaFunction\'', function(t) {
    process.env.AWS_LAMBDA_FUNCTION_NAME = 'MyLambdaFunction_staging';

    t.is(env.suffix(), 'staging');

    t.end();
});

test('Suffix::Return staging environment if the name is \'Staging_MyLambdaFunction\'', function(t) {
    process.env.AWS_LAMBDA_FUNCTION_NAME = 'MyLambdaFunction_Staging';

    t.is(env.suffix(), 'staging');

    t.end();
});

test('Suffix::Return undefined if the name is \'MyLambdaFunction\'', function(t) {
    process.env.AWS_LAMBDA_FUNCTION_NAME = 'MyLambdaFunction';

    t.is(env.suffix(), undefined);

    t.end();
});

test('Suffix::Return staging environment if the name is \'staging:MyLambdaFunction\' and delimiter is set to \':\'', function(t) {
    process.env.AWS_LAMBDA_FUNCTION_NAME = 'MyLambdaFunction:staging';

    t.is(env.suffix(':'), 'staging');

    t.end();
});