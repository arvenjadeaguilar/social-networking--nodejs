var express = require('express');
var app = express();


app.configure(function(){
	app.set('view engine','jade');
	app.use(express.static(__dirname+'/public'));

}
);

app.get('/',function(req,res){
	res.render("index.jade",{layout:false});


});

app.get('/account/authenticated', function(res,req){
	if(req.session.loggedIn){
		res.send(200);
	
	}
	
	else{
		res.send(404);
	
	}

});


app.post('/register',function(req,res){
	var firstname = req.param('firstname','');
	var lastname = req.param('lastname','');
	var email = req.param('email',null);
	var password = req.param('pwd',null);
	
	if(null = email|| null = password){
		res.send(400);
		return;
	}
	Account.register(email,password,lastname,firstname);
	res.send(200);
});


app.post('/login',function(req,res){
	console.login('login Request');
	
	var email = req.param('email',null);
	var password = req.param('password',null);
	
	if(null == email || email.length<1 || null == password || password.length<1){
		res.send(400);
		return;}
		
		
	account.login(email,password,function(success){
		if(!success){
			res.send(401);
			return;
			
		}
		console.log('login was successful');
			res.send(200);
	
	});
});

app.listen(8080);