let logger = (req, res, next) => {
  //   console.log(req);
  console.log(`${req.method} on ${req.originalUrl}`);
  console.log(req.body);

  next();
};

module.exports = logger;
