'use strict';

/**
 * Determines the environment the lambda function is running in.
 *
 * @author Sam Verschueren      <sam.verschueren@gmail.com>
 * @since  1 Sep. 2015
 */

/**
 * This method returns the environment the function is running in.
 *
 * @param  {string} delimiter   The delimiter to split the function on, _ by default.
 * @return {string}             The environment the function is running in.
 */
function prefix(delimiter) {
    // Split the function name by the delimiter
    var name = process.env.AWS_LAMBDA_FUNCTION_NAME.split(delimiter || '_');

    // Return the first piece or undefined if no pieces are found
    return name.length > 1 ? name.shift().toLowerCase() : undefined;
}

/**
 * This method returns the environment the function is running in by extracting
 * the environment name at the end of the function name.
 *
 * @param  {string} delimiter   The delimiter to split the function on, _ by default.
 * @return {string}             The environment the function is running in.
 */
function suffix(delimiter) {
    // Split the function name by the delimiter
    var name = process.env.AWS_LAMBDA_FUNCTION_NAME.split(delimiter || '_');

    // Return the first piece or undefined if no pieces are found
    return name.length > 1 ? name.pop().toLowerCase() : undefined;
}

// Export the functions
module.exports = prefix;
module.exports.prefix = prefix;
module.exports.suffix = suffix;