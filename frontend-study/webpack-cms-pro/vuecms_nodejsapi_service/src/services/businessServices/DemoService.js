const demo = require('../daoServices/DemoDaoService')

module.exports = {
  getLunBo(req, res) {
    console.log(req.path);
    res.json(demo.getLunbo());
  },
  getNewsList(req, res) {
    console.log(req.path);
    res.json(demo.getNewsList());
  }
}