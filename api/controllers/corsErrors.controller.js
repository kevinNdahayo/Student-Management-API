function corsErrorsController(req, res, next) {
  res.header('Access-Control-Allow-Origin')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin',
    'X-requested-With , Content-type, Accept , Authorization ',
  )

  if (req.method === 'OPTIONS') {
    res.header(
      'Access-Control-Allow-Methods',
      ' PUT , POST , PATCH , GET , DELETE ',
    )
    return res.status(200).json({})
  }
  next()
}

module.exports = corsErrorsController
