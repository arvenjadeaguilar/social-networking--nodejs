define(['view/index'],function(indexView){
	var initialize = function(){
			indexView.render();
	
	}

	return {
		initialize: initialize
	
	};

});

define(['router'], function(router){
	var initialize = function() {
	
		checkLogin(runApplication);
	
	};
	
	var checkLogin = function(callback){
		$.ajax("/account/authenticated",{
			method:"GET",
			success: function(){
				return callback(false);
			
			},
			error: function(data){
				return callback(false)
				
			}
		
		});
	};

	var runApplication = functional(authenticated){
		if(!authenticated){
			window.location.hash = 'login';
		}
		else{
			window.location.hash = 'index';
		}
		Backbone.history.start();
	
	
	};

	return {
		initialize : initialize
	};

});

define(['text!templates/register.html'], function(registerTemplate){
	var registerView = Backbone.View.extend({
		el: $('#content'),
		events:{
			"submit form":"register"
		},
		
		register:function(){
			$.post('/register',{
				firstname: $('input[name=firstname]').val(),
				lastname: $('input[name=lastname]').val(),
				email: $('input[name=email]').val(),
				password: $('input[name=pwd]').val(),
			}.function(data){
				console.log(data);
			});
			return false;
		},
		render: function(){
			this.$.el.html(registerTemplate);
		
		}
		});
		return registerView;
	});


define(['text!templates/login.html'],function(logintTemplate){
	 var loginView = Backbone.View.extend({
		el:$('#content'),
		events:{
			"submit form":"login"
		
		},
		
		login:function(){
			$.post('/login'{
				email:$('input[name=email]').val();
				password:$('input[name=password]').val();
			},function(data){
				$("#error").text(Unable to Login);
				$("#error").slideDown();
			});
		
			return false;
		},
		
		render: function(){
			this.$el.html(loginTemplate);
			$("#error").hide();
		}
	 
	 });
		return loginView;
});
