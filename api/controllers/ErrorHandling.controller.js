function ErrorInfo(req, res, next) {
  const error = new Error('Not found')
  error.status = 404
  next(error)
}

function ErrorMessage(error, req, res, next) {
  res.status(error.status || 500).json({
    message: error.message,
  })
}

module.exports = {
  ErrorInfo,
  ErrorMessage,
}
