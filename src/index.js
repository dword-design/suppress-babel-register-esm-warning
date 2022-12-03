const defaultEmitWarning = process.emitWarning
process.emitWarning = function (message, type, ...rest) {
  if (
    type === 'DeprecationWarning' &&
    message ===
      'Obsolete loader hook(s) supplied and will be ignored: getFormat, transformSource'
  ) {
    return undefined
  }

  return defaultEmitWarning.call(this, message, type, ...rest)
}
