# aws-lambda-env [![Build Status](https://travis-ci.org/SamVerschueren/aws-lambda-env.svg?branch=master)](https://travis-ci.org/SamVerschueren/aws-lambda-env)

> Extracts the environment of the lambda function.


## Installation

```
$ npm install --save aws-lambda-env
```


## Usage

```js
var lambdaEnv = require('aws-lambda-env');

exports.handler = function(event, context) {
	var env = lambdaEnv(context) || 'staging';

	console.log(env);
	//=> 'production'
};
```


## API

### lambdaEnv(context)

Returns the alias or version of the lambda invocation. Returns `undefined` if `$LATEST` is executed.

#### context

Type: `object`

The context of the lambda function.


## License

MIT © Sam Verschueren
