process.env.TW_API = 'twp_lRHtkaJcGslZuUl82JEcOUh7S0c8'
process.env.TW_SUB = 'wpunite'

const tw = require('./src')()

tw.workload.get()
    .then((result) => console.log(result.data))
    .catch((error) => console.error(error))
