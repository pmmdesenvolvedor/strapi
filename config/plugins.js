module.exports = () => ({
  upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        s3Options: {
          // @ts-ignore
          accessKeyId: env('AWS_ACCESS_KEY_ID'),
          // @ts-ignore
          secretAccessKey: env('AWS_ACCESS_SECRET'),
          // @ts-ignore
          region: env('AWS_REGION', 'eu-west-1'),
          params: {
            Bucket: env('AWS_BUCKET_NAME'),
          }
        }
      },
      actionOptions: {
        upload: {
          ACL: null
        },
        uploadStream: {
          ACL: null
        }
      }
    }
  }
});
