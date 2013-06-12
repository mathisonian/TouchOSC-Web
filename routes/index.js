exports.home = function(req, res) {
  res.render('index', {
      title: 'OSC TEST',
      description: 'OSC TEST',
      author: '@mathisonian'
  });
};
