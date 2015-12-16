# aws-lambda-env [![Build Status](https://travis-ci.org/SamVerschueren/aws-lambda-env.svg?branch=master)](https://travis-ci.org/SamVerschueren/aws-lambda-env)

> Extracts the environment the lambda function is running in.


## Installation

```
$ npm install --save aws-lambda-env
```


## Usage

```js
var lambdaEnv = require('aws-lambda-env');

exports.handler = function(event, context) {
	var env = lambdaEnv(context) || 'staging';

	var config = require('./config.json')[env];
};
```


## API

### lambdaEnv(context)

Returns the alias of the lambda invocation or `undefined` if no alias was found.

#### context

Type: `object`

The context of the lambda function.


## License

MIT © Sam Verschueren
