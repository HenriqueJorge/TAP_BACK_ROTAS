const winston = require('winston');

const logger = winston.createLogger({
    level: 'info',
    transports: [
        new winston.transports.File({
            level: 'erro' ,
            filename: 'log/erros.log'
        }),
        new winston.transports.File({
            filename: 'log/combinado.log'
        })
    ]
});

if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console());
}

module.exports = logger;