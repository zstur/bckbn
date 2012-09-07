//Mirrors Collection
//------------------

//The collectin of todos is backed by *localstorage* instead of remote server

var MirrorList = Backbone.Collection.extend({
	//Reference the collection's model
	model: app.Mirror,

	//Save all of the mirror items in the mirror namespace.
	localSorage: new Store('mirrors-backbone')

});


//create global collections of *Mirrors*
app.Mirrors = new. MirrorList();