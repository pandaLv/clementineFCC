'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = new Schema({
	user: {
		passport: String,
		id: String,
		displayName: String,
		username: String,
		publicRepos: Number
	},
  nbrClicks: {
    clicks: Number
  }
});

module.exports = mongoose.model('User', User);
