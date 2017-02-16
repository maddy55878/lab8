module.exports.html1 = function(req, res){
  res.render('html1', { title: 'page1' });
};

module.exports.html2 = function(req, res){
  res.render('html2', { title: 'page2' });
};
