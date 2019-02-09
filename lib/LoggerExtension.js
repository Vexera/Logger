class LoggerExtension {
  constructor(baseLogger, name) {
    this.baseLogger = baseLogger;
    this.name = name;
  }

  info(text) {
    return this.baseLogger.log(this.name, 'info', text);
  }

  warn(text) {
    return this.baseLogger.log(this.name, 'warn', text);
  }

  debug(text) {
    return this.baseLogger.log(this.name, 'debug', text);
  }

  error(text) {
    if (this.baseLogger.options.sentry) this.baseLogger.options.sentry.captureException(text);
    return this.baseLogger.log(this.name, 'error', text.stack ? text.stack : text);
  }

  getExtension(...args) {
    return this.baseLogger.getExtension(...args);
  }
}

module.exports = LoggerExtension;
