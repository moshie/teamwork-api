const tw = require('./test/helpers')

tw.account()
    .then((result) => console.log(result))
    .catch((error) => console.error(error))
