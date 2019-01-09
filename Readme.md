# image-resizer-service

This serverless application deploys a Lambda function and API Gateway to your AWS account that reads images from a S3 bucket (whose name defined at deployment) and serves them through API Gateway.

The API Gateway respects the file organization on S3 bucket. For example, an image stored in s3://assets.mshanken.com/cao/bolt/2018-12/2018-ca-gift-guide-1600.jpg will be served from https://ey1swrk661.execute-api.us-east-1.amazonaws.com/production/cao/bolt/2018-12/2018-ca-gift-guide-1600.jpg?w=1000

To resize the same image, simply give dimensions as `width` and `height` GET parameters as ?w=PIXEL or ?h=PIXEL.

After deploying the application, you are strongly recommended to deploy a CDN distribution in front of API Gateway, so your responses are cached and it will improve performance and reduce costs significantly.

## Release Notes

### 0.2.1

- Codebuild/Codepipeline integration. 
- Width/Height paramenter alteration.

### 0.1.1

- Major refactor, increase test coverage, full ES6 migration.
- ability to adjust Lambda memmory size.

### 0.1

Initial version

## License

MIT License (MIT)
