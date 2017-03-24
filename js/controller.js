var app = function(app){

	app.makeController = function(stage,p){

		p.tabs.on("change", function(){
			zog("button = " + p.tabs.text);
		});
	}
	return app;
}(app||{});