var app = app || {}

//Mirror Model
// -----------
// Basic Mirror model has 'color', 'length', 'width', 'shape' attributes.

app.Mirror = Backbone.Model.extend({
	//set defaults for mirror
	//ensure that all attributes have key

	defaults {
		color: '',
		length: '',
		width: '',
		shape: ''
	}
	
});