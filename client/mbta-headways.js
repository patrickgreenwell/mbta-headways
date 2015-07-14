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

