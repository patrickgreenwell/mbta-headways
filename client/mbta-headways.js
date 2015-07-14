if (Meteor.isClient) {

	Template.body.helpers({
		modes: function(){
			var validModes = AllModes.filter(function(x){ 
				return gtfsRouteTypesAllowed.indexOf(x.route_type) > "-1";
			});
			// console.log(validModes);
			return validModes;
		}
	});
	
}

$( document ).ready(function(){
	$(".button-collapse").sideNav();
	$('.collapsible').collapsible({
      		accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
  		});
});

