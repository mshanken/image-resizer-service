const {errorResponse} = require("./response");
const url = require('url');
const {original, resize} = require("./image");

exports.handler = (event) => new Promise((resolve, reject) => {
    const imageBucket = process.env.IMAGE_BUCKET;

    if (!imageBucket) {
        return reject(`Error: Set environment variable IMAGE_BUCKET`);
    }

    const path = event.path;
    const objectKey = url.parse(path).pathname.replace(/^\/+/g, '');
    console.log('INFO: key: ' + objectKey);

    const queryParameters = event.queryStringParameters || {};

    if (!queryParameters.w && !queryParameters.h) {
        return original(imageBucket, objectKey)
            .then(resolve)
            .catch(reject);
    }

    const width = parseInt(queryParameters.w);
    const height = parseInt(queryParameters.h);

    if ((queryParameters.w && isNaN(width)) || (queryParameters.height && isNaN(height))) {
        return reject(errorResponse(`width and height parameters must be integer`, 400));
    }

    return resize(imageBucket, objectKey, width, height)
        .then(resolve)
        .catch(reject);
});
