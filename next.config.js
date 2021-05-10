module.exports = {
    /* config options here */
    devIndicators: {
        autoPrerender: false
    }
}

const path = require('path')

module.exports = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
}
