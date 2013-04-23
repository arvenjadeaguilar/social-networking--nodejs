define(['text!templates/index.html'],function(){
	var indexView = Backbone.View.extend({
	
	el:$('#content'),
	
	render:function(){
		this.$el.html(indexTemplate);
	}	
	});

	return new indexView;

});