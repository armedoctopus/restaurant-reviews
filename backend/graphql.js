const AWS = require('aws-sdk');
const process = require('process');

AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    sessionToken: process.env.AWS_SESSION_TOKEN,
    region: process.env.AWS_REGION
});
const s3 = new AWS.S3();
const expiryTime = 3600; // 1 hour = 3600 secomds

exports.profilePictureResolver = (event, context, callback) => {
    const params = {
        Bucket: process.env.S3_BUCKET.split(':')[5],
        Key: `profilePictures/${event.id}.png`,
        Expires: expiryTime
    };

    /*
    ** Pre-sign a getObject synchronously
    */
    const response = {
        url: s3.getSignedUrl('getObject', params)
    };

    /*
    ** Pre-sign a putObject synchronously
    */
    if (event.id === event.identity.username) {
        response.uploadUrl = s3.getSignedUrl('putObject', params);
    }

    callback(null, response);
};
