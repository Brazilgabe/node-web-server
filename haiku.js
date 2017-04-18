let asciify = require('asciify');
const text = "something for this"
asciify(text, {
    font: 'larry3d'
}, function(err, result) {
    if (err) {
        console.log('sorry, we couldnt generate that art')
    } else {
        console.log(result)
    }
});
