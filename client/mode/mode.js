Template.mode.helpers({
	mode_icon: function (name) {
			// ...
			name = name.toLowerCase();
			if(name === "trolley")
			{
				name = "subway";
			}
			if(name === "commuter rail")
			{
				name = "railway";
			}
			if(name === "ferry")
			{
				name = "boat";
			}

			var iconName = "directions_" + name;
			return iconName;
		}
	});
Template.mode.onRendered(function(){
	$(document).ready(function(){
		$('.collapsible').collapsible({
      		accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
  		});
	});
});