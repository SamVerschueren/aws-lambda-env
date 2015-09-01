# aws-lambda-env

[![Build Status](https://travis-ci.org/SamVerschueren/aws-lambda-env.svg?branch=master)](https://travis-ci.org/SamVerschueren/aws-lambda-env)

> Determines the environment the lambda function is running in.

## Installation

```
$ npm install --save aws-lambda-env
```

## Usage

For instance, if the name of your lambda function is `staging_MyLambdaFunction`, the
library will return `staging` as environment.

```javascript
// Retrieve the environment
var env = require('aws-lambda-env')() || 'production';

// Load the correct config information
var config = require('./config.json')[env];
```

If you want to change the default delimiter to something else, for instance if the name
of your lambda function is `staging:MyLambdaFunction`, you can pass the delimiter as argument.

```javascript
// Retrieve the environment
var env = require('aws-lambda-env')(':') || 'production';
```

> Note: The library will return the lowercase name of the environment specified.

## API

### plugin([delimiter])

#### delimiter

Type: `string`

The delimiter to split the lambda function name on.

## Author

- Sam Verschueren [<sam.verschueren@gmail.com>]

## License

MIT © Sam Verschueren