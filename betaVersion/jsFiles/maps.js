var map = AmCharts.makeChart("mapdiv",
{
	type: "map",
	theme: "dark",
	projection: "mercator",
	panEventsEnabled : true,
	backgroundColor : "#135b7a",
	backgroundAlpha : 1,
	zoomControl: 
	{
		zoomControlEnabled : true
	},
	dataProvider : 
	{
		map : "worldHigh",
		getAreasFromMap : true,
		areas :
	[]
	},
	areasSettings : 
	{
		autoZoom : true,
		color : "#FFF",
		colorSolid : "#84ADE9",
		selectedColor : "#84ADE9",
		outlineColor : "#666666",
		rollOverColor : "#9EC2F7",
		rollOverOutlineColor : "#000000"
	}
});