//config.js
//All the configuration for startup goes here
//settings for both client and server. 

// This allows you to pick which route types to display to the user
// Values are taken directly from the GTFS feed. 
// 0 - Tram, Streetcar, Light rail. Any light rail or street level system within a metropolitan area.
// 1 - Subway, Metro. Any underground rail system within a metropolitan area.
// 2 - Rail. Used for intercity or long-distance travel.
// 3 - Bus. Used for short- and long-distance bus routes.
// 4 - Ferry. Used for short- and long-distance boat service.
// 5 - Cable car. Used for street-level cable cars where the cable runs beneath the car.
// 6 - Gondola, Suspended cable car. Typically used for aerial cable cars where the car is suspended from the cable.
// 7 - Funicular. Any rail system designed for steep inclines. 
gtfsRouteTypesAllowed = ["0","1","2","3","4",];

//The base route to the GTFS realtime feed
gtfsRealtimeApiBaseRoute = "http://realtime.mbta.com/developer/api/v2/";
gtfsRealtimeApiKey = "wX9NwuHnZU2ToO7GmGR9uw";

