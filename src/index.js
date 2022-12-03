const defaultEmit = process.emit
process.emit = function (...args) {
  return defaultEmit.call(this, ...args)
}
