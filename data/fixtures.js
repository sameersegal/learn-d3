App.Chapter.FIXTURES = [
	{
		"id": "philosophy",	
		"title": "Philosophy",
		"description": "D3 understands ```enter```,```update``` and ```exit``` states for data. It is important to disect a visualization and specify d3 actions based on the three states of data. Follow the steps below to experiment and see this amazing capability of D3",
		"seed": "1\n2\n3\n4",
		"code": "function(data) {\n\n}",
		"steps": [1,2,3,4]
	},
	{
		"id": "my-first-graph",	
		"title": "My First Graph",
		"description": "D3 uses the top left corner as the origin. You need change your frame of refrence and think of it as you are drawing an inverted (y-axis) graph. We look at ```linear``` and ```ordinal``` scales.",
		"steps": [11,12,13,14,15]
	},
	// {
	// 	"id": "animation",	
	// 	"title": "Animation",
	// 	"description": "Now that we have a basic graph, lets add some animation: ```grow``` and ```fade``` effects.",
	// 	"steps":[21,22,23]
	// },
	{
		"id": "moving-scales",	
		"title": "Moving Scales",
		"description": "Now that you have your basics covered, lets try and combine all that we learnt with a constantly adapting graph -- even its scales adapt",
		"steps": [21,22,23]
	},
	// {
	// 	"id": "layouts",	
	// 	"title": "Layouts",
	// 	"description": "One of the most exciting parts about d3 is ```layouts```, which modifies the underlingin data and adds interesting capabilities"
	// }
];

App.Step.FIXTURES = [
	{
		"id": 1,
		"title": "Enter Data",
		"text": "Enter single digit numbers in the data editor and see them pop up in the graph",
		"code": null,
		"data": "1\n2\n3\n4"
	},
	{
		"id": 2,
		"title": "Exit Data",
		"text": "Remove a number from the data editor and see them disappear in the graph",
		"code": null,
		"data": "1\n2\n3\n4"
	},
	{
		"id": 3,
		"title": "Update Data",
		"text": "Change data at each row and see the balls move",
		"code": null,
		"data": "1\n2\n3\n4"
	},
	{
		"id": 4,
		"title": "Helping d3 distinguish data items",
		"text": "Did you notice that d3 was only able to understand an item by its position in the array. Lets change that behaviour to value",
		"code": null,
		"data": "1\n2\n3\n4"
	},


	{
		"id": 11,
		"title": "Scales: Linear",
		"text": "Lets see how linear scale works",
		"code": null,
		"data": "1\n2\n3\n4"
	},
	{
		"id": 12,
		"title": "Right way up",
		"text": "Correct the graph so that it starts looking like a normal bar graph",
		"code": null,
		"data": "1\n2\n3\n4"
	},
	{
		"id": 13,
		"title": "Scales: Ordinal",
		"text": "Lets see how ordinal scale works",
		"code": null,
		"data": "1\n2\n3\n4"
	},
	{
		"id": 14,
		"title": "Adding a scale",
		"text": "To create adequate space for the axes, we translate the 'g' container",
		"code": null,
		"data": "1\n2\n3\n4"
	},
	{
		"id": 15,
		"title": "Translating / Orientation",
		"text": "Take a look at this: http://bl.ocks.org/mbostock/3019563 and modify your graph",
		"code": null,
		"data": "1\n2\n3\n4"
	},


	{			
		"id": 21,
		"title": "Grow animaiton",
		"text": "To grow, we force the graph to go from 0 to the current value using hte scale ",
		"code": null,
		"data": "1\n2\n3\n4"
	},
	{
		"id": 22,
		"title": "Mouse events",
		"text": "Add a mouseover and mouseout event",
		"code": null,
		"data": "1\n2\n3\n4"
	},
	{
		"id": 23,
		"title": "Moving scales",
		"text": "Detect and add animation to your graphics to make them even more intuitive ",
		"code": null,
		"data": "1\n2\n3\n4"
	}
	
];