import fs from 'fs';
import path from 'path';
import { createLogger, format, transports } from 'winston';
import 'winston-daily-rotate-file';

const logDirectory = path.join(__dirname, 'logs');

// Ensure log directory exists
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);

const transport = new (require('winston-daily-rotate-file'))({
    filename: path.join(logDirectory, '%DATE%-results.log'),
    datePattern: 'YYYY-MM-DD',
    zippedArchive: true,
    maxSize: '20m',
    maxFiles: '14d',
    level: 'info',
});

const logger = createLogger({
    format: format.combine(
        format.timestamp(),
        format.printf(({ timestamp, level, message }) => {
            return `${timestamp} ${level}: ${message}`;
        })
    ),
    transports: [
        transport,
        new transports.Console(),
    ],
});

export default logger;
