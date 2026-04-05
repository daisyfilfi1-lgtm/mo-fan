const fs = require('fs');
const pdf = require('pdf-parse');

const dataBuffer = fs.readFileSync('我是小敏，这是我的十年PLUS版.pdf');

pdf(dataBuffer).then(function(data) {
    console.log(data.text);
}).catch(function(err) {
    console.error('Error:', err);
});
