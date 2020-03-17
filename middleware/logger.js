let logger = (req, res, next) => {
  //   console.log(req);
  console.log(req.method, req.originalUrl);
  next();
};

module.exports = logger;
