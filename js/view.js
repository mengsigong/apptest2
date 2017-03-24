var app = function(app){

	app.makePages = function(stage){

		var p ={};//pages

		var logo = new zim.Rectangle(300,100,frame.blue)
			.addTo(stage);

		var content = new zim.Rectangle(600,500,frame.blue)
			.addTo(stage);

		var buttons = new zim.Container()
			.addTo(stage);

		var tabs = p.tabs = new zim.Tabs({
			width:440,
			tabs:["ONE","TWO","THREE"]
		}).addTo(buttons);

		//LAYOUT
		//zim.Layout = function(holder, regions, lastMargin, backgroundColor, vertical, regionShape, scalingObject, hideKey)
		var layout = p.layout = new zim.Layout({
			holder:stage, //if we have different pages, better to make them into containers
			regions:[
				{object:logo, marginTop:10, maxWidth:80, height:15, align:"center", valign:"top"},
				{object:content, marginTop:5, maxWidth:90}, //"90" those are percentage
				{object:buttons, marginTop:5, maxWidth:100, minHeight:10, backgroundColor:frame.dark}
			],
			lastMargin:5,
			regionShape:new zim.Shape()
		});

		return p;

	} //end of makePages

	return app;

}(app||{});