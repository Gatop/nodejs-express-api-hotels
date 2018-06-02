const controller = {};
var data = require('./data.json');

controller.list = (req, res) => {
  res.send(data);
};

module.exports = controller;
