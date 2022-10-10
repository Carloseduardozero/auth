
const base64Url = require('base64url')
const header: {} = {
    alg: 'HS256',
    typ: 'JWT',
};

const payload:{} = {
    username: 'carlos',
    name: 'carlos Eduardo',
    exp: new Date().getTime()

};

const Key = 'abcd123';

const headerEncoded = base64Url(JSON.stringify(header)).toString("base64")
const payloadEncoded = base64Url(JSON.stringify(payload)).toString("base64")

//console.log(headerEncoded,payloadEncoded)

const crypt = require('crypto');

const signature =  crypt.createHmac('sha256', Key).update(`${headerEncoded}.${payloadEncoded}`)
.digest("bin")

//console.log(signature)



console.log(`${headerEncoded}.${payloadEncoded}.${base64Url(signature)}`)


