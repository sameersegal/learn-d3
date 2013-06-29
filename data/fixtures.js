App.Chapter.FIXTURES = [
	{
		"id": "philosophy",	
		"title": "Philosophy",
		"description": "D3 understands ```enter```,```update``` and ```exit``` states for data. It is important to disect a visualization and specify d3 actions based on the three states of data. Follow the steps below to experiment and see this amazing capability of D3",
		"seed": "1\n2\n3\n4",
		"code": "function setup(data) {\n\t// select the graph\n\tvar graph = d3.select(\"#graph\");\n\t// add add a container\n\tvar g = graph\n\t\t\t   .append(\"svg\")\n\t\t\t   .append(\"g\");\n\treturn g;\n}",
		"steps": [1,2,3,4]
	},
	{
		"id": "my-first-graph",	
		"title": "My First Graph",
		"description": "D3 uses the top left corner as the origin. You need change your frame of refrence and think of it as you are drawing an inverted (y-axis) graph. We look at ```linear``` and ```ordinal``` scales.",
		"seed": "1\n2\n3\n4",
		"code": "function setup(data) {\n\tvar graph = d3.select(\"#graph\");\n\tvar g = graph\n\t\t\t   .append(\"svg\")\n\t\t\t   .append(\"g\");\n\treturn g;\n}\n",
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
		"seed": "1\n2\n3\n4",
		"code": "function setup(data) {\n\tvar graph = d3.select(\"#graph\");\n\tvar g = graph\n\t\t\t   .append(\"svg\")\n\t\t\t   .append(\"g\");\n\treturn g;\n}\n",
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
		"code": "function setup(data) {\n\t// select the graph\n\tvar graph = d3.select(\"#graph\");\n\t// add add a container\n\tvar g = graph\n\t\t\t   .append(\"svg\")\n\t\t\t   .append(\"g\");\n\treturn g;\n}\n\nfunction draw(svg, data) {\n\tsvg.selectAll(\"circle\")\n\t .data(data)\n\t .enter()\n\t .append(\"circle\")\n\t // center\n\t .attr(\"cx\",function(d) { return d*50;})\n\t .attr(\"cy\",function(d) { return d*50;})\n\t // radius\n\t .attr(\"r\",10)\n\t .attr(\"fill\",\"steelblue\");\n}",
		"data": "1\n2\n3\n4"
	},
	{
		"id": 2,
		"title": "Exit Data",
		"text": "Remove a number from the data editor and see them disappear in the graph",
		"code": "function setup(data) {\n\t// select the graph\n\tvar graph = d3.select(\"#graph\");\n\t// add add a container\n\tvar g = graph\n\t\t\t   .append(\"svg\")\n\t\t\t   .append(\"g\");\n\treturn g;\n}\n\nfunction draw(svg, data) {\n\tsvg.selectAll(\"circle\")\n\t .data(data)\n\t .exit()\n\t .attr(\"fill\",\"red\");\n}",
		"data": "1\n2\n3\n4"
	},
	{
		"id": 3,
		"title": "Update Data",
		"text": "Change data at each row and see the balls move",
		"code": "function setup(data) {\n\t// select the graph\n\tvar graph = d3.select(\"#graph\");\n\t// add add a container\n\tvar g = graph\n\t\t\t   .append(\"svg\")\n\t\t\t   .append(\"g\");\n\treturn g;\n}\n\nfunction draw(svg, data) {\n\tsvg.selectAll(\"circle\")\n\t .data(data)\n\t .attr(\"cx\",function(d) { return d*50;})\n\t .attr(\"fill\",\"green\");\n}",
		"data": "1\n2\n3\n4"
	},
	{
		"id": 4,
		"title": "Helping d3 distinguish data items",
		"text": "Did you notice that d3 was only able to understand an item by its position in the array. Lets change that behaviour to value",
		"code": "function setup(data) {\n\t// select the graph\n\tvar graph = d3.select(\"#graph\");\n\t// add add a container\n\tvar g = graph\n\t\t\t   .append(\"svg\")\n\t\t\t   .append(\"g\");\n\treturn g;\n}\n\nfunction draw(svg, data) {\n\tvar circles = svg.selectAll(\"circle\")\n\t .data(data, function(d,i) { return d;});\n\n\tcircles\n\t .enter()\n\t .append(\"circle\")\n\t .attr(\"cx\",function(d) { return d*50;})\n\t .attr(\"cy\",function(d) { return d*50;})\n\t .attr(\"r\",10)\n\t .attr(\"fill\",\"steelblue\");\n\n\tcircles\n\t .exit()\n\t .attr(\"fill\",\"red\");\n\n\tcircles\n\t .data(data)\n\t .attr(\"cx\",function(d) { return d*50;})\n\t .attr(\"fill\",\"green\");\n}",
		"data": "1\n2\n3\n4"
	},




	{
		"id": 11,
		"title": "Scales: Linear",
		"text": "Lets see how linear scale works",
		"code": "function setup(data) {\n\tvar graph = d3.select(\"#graph\");\n\tvar g = graph\n\t\t\t   .append(\"svg\")\n\t\t\t   .append(\"g\");\n\treturn g;\n}\n\nfunction draw(svg, data) {\n\n\tvar y = d3.scale.linear().range([0,400]);\n\ty.domain(d3.extent(data));\n\n\tsvg.selectAll(\"rect\")\n\t .data(data)\n\t .enter()\n\t .append(\"rect\")\n\t .attr(\"x\",function(d,i) { return i*50;})\n\t .attr(\"height\",y)\n\t .attr(\"width\",30)\n\t .attr(\"fill\",\"steelblue\");\n}",
		"data": "1\n2\n3\n4"
	},
	{
		"id": 12,
		"title": "Right way up",
		"text": "Correct the graph so that it starts looking like a normal bar graph",
		"code": "function setup(data) {\n\tvar graph = d3.select(\"#graph\");\n\tvar g = graph\n\t\t\t   .append(\"svg\")\n\t\t\t   .append(\"g\");\n\treturn g;\n}\n\nfunction draw(svg, data) {\n\n\tvar y = d3.scale.linear().range([0,400]);\n\ty.domain(d3.extent(data).reverse());\n\n\tvar rects = svg.selectAll(\"rect\")\n\t .data(data);\n\n\trects\n     .enter()\n\t .append(\"rect\")\n\t .attr(\"x\",function(d,i) { return i * 50; })\n\t .attr(\"width\",30)\n\t .attr(\"fill\",\"steelblue\");\n\n\trects\n\t .attr(\"y\",y)\n\t .attr(\"height\",function(d) { return 400 - y(d);});\t \n\n\trects\n\t .exit()\n\t .remove();\n}",
		"data": "1\n2\n3\n4"
	},
	{
		"id": 13,
		"title": "Scales: Ordinal",
		"text": "Lets see how ordinal scale works",
		"code": "function setup(data) {\n\tvar graph = d3.select(\"#graph\");\n\tvar g = graph\n\t\t\t   .append(\"svg\")\n\t\t\t   .append(\"g\");\n\treturn g;\n}\n\nfunction draw(svg, data) {\n\n\tvar y = d3.scale.linear().range([0,400]);\n\ty.domain(d3.extent(data).reverse());\n\n\tvar rects = svg.selectAll(\"rect\")\n\t .data(data);\n\n\trects\n     .enter()\n\t .append(\"rect\")\n\t .attr(\"x\",function(d,i) { return i * 50; })\n\t .attr(\"width\",30)\n\t .attr(\"fill\",\"steelblue\");\n\n\trects\n\t .attr(\"y\",y)\n\t .attr(\"height\",function(d) { return 400 - y(d);});\t \n\n\trects\n\t .exit()\n\t .remove();\n}",
		"data": "1\n2\n3\n4"
	},
	{
		"id": 14,
		"title": "Adding axes",
		"text": "Read up on [Axes](https://github.com/mbostock/d3/wiki/SVG-Axes) and lets add x & y axes",
		"code": null,
		"data": "1\n2\n3\n4"
	},
	{
		"id": 15,
		"title": "Translating / Orientation",
		"text": "Take a look at [this](http://bl.ocks.org/mbostock/3019563) and modify your graph",
		"code": null,
		"data": "1\n2\n3\n4"
	},


	{			
		"id": 21,
		"title": "Grow animaiton",
		"text": "To grow, we force the graph to go from 0 to the current value using hte scale ",
		"code": "function setup(data) {\n\tvar graph = d3.select(\"#graph\");\n\tvar g = graph\n\t\t\t   .append(\"svg\")\n\t\t\t   .append(\"g\");\n\treturn g;\n}\n\nfunction draw(svg, data) {\n\n\tvar y = d3.scale.linear().range([0,400]);\n\ty.domain(d3.extent(data).reverse());\n\n\tvar rects = svg.selectAll(\"rect\")\n\t .data(data);\n\n\trects\n     .enter()\n\t .append(\"rect\")\n\t .attr(\"x\",function(d,i) { return i * 50; })\n\t .attr(\"width\",30)\n\t .attr(\"fill\",\"steelblue\");\n\n\trects\n\t .transition()\n\t .duration(1000) \n\t .attr(\"y\",y)\n\t .attr(\"height\",function(d) { return 400 - y(d);});\t \n\n\trects\n\t .exit()\n\t .remove();\n}",
		"data": "1\n2\n3\n4"
	},
	{
		"id": 22,
		"title": "Mouse events",
		"text": "Add a mouseover and mouseout event",
		"code": "function setup(data) {\n\tvar graph = d3.select(\"#graph\");\n\tvar g = graph\n\t\t\t   .append(\"svg\")\n\t\t\t   .append(\"g\");\n\treturn g;\n}\n\nfunction draw(svg, data) {\n\n\tvar y = d3.scale.linear().range([0,400]);\n\ty.domain(d3.extent(data).reverse());\n\n\tvar rects = svg.selectAll(\"rect\")\n\t .data(data);\n\n\trects\n     .enter()\n\t .append(\"rect\")\n\t .attr(\"x\",function(d,i) { return i * 50; })\n\t .attr(\"width\",30)\n\t .attr(\"fill\",\"steelblue\")\n\t .on(\"mouseover\",function(){\n\t \td3.select(this).attr('fill', 'red');\n\t })\n\t .on(\"mouseout\",function(){\n\t \td3.select(this).attr('fill', 'steelblue');\n\t });\n\n\trects\n\t .transition()\n\t .duration(1000) \n\t .attr(\"y\",y)\n\t .attr(\"height\",function(d) { return 400 - y(d);});\t \n\n\trects\n\t .exit()\n\t .remove();\n}\n",
		"data": "1\n2\n3\n4"
	},
	{
		"id": 23,
		"title": "Moving scales",
		"text": "Now lets make everything dynamic including data, axes, etc",
		"code": null,
		"data": "1\n2\n3\n4"
	}
	
];