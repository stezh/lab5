// Get all of our friend data
var data = require('../data.json');

exports.view = function(req, res){
  /*
  var name = data.params.name;
  var description = data.params.description;
  var imageURL = data.params.imageURL;
  */
	//console.log(data);
	res.render('index',data);
};
