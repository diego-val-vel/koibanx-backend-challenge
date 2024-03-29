const winston = require('winston');

const tsFormat = (new Date()).toLocaleTimeString();
const logger = new (winston.Logger)({
    transports: [
        // colorize the output to the console
        new (winston.transports.Console)({
            timestamp: tsFormat,
            colorize: true,
            level: 'info',
            silent: false,
        }),
    ]
});

module.exports = logger;
