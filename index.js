require('dotenv').config()

const tw = require('./src')()

tw.projects.getActivity(308180)
    .then((result) => console.log(result))
    .catch((error) => console.error(error))
