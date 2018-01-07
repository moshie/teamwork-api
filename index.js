const tw = require('./src')()

tw.board.getColumns()
    .then((result) => console.log(result))
    .catch((error) => console.error(error))
