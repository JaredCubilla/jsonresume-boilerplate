var fs = require('fs');
var _ = require('lodash')
var Mustache = require('mustache');
var schema = require('resume-schema');

var resumeObject = schema.resumeJson; 

function render(resumeObject) {

	// Insert Javascript Here

	var theme = fs.readFileSync(__dirname + '/resume.template', 'utf8');
	var resumeHTML = Mustache.render(theme, resumeObject);
	
	return resumeHTML;
}

module.exports = {
	render: render
}