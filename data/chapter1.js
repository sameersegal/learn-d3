function setup(data) {
	var graph = d3.select("#graph");
	var g = graph
			   .append("svg")
			   .append("g");
	return g;
}

function draw(svg, data) {
	svg.selectAll("circle")
	 .data(data)
	 .enter()
	 .append("circle")
	 .attr("cx",function(d) { return d*50;})
	 .attr("cy",function(d) { return d*50;})
	 .attr("r",10)
	 .attr("fill","steelblue");
}

function draw(svg, data) {
	svg.selectAll("circle")
	 .data(data)
	 .exit()
	 .attr("fill","red");
}

function draw(svg, data) {
	svg.selectAll("circle")
	 .data(data)
	 .attr("cx",function(d) { return d*50;})
	 .attr("fill","green");
}

function draw(svg, data) {
	var circles = svg.selectAll("circle")
	 .data(data, function(d,i) { return d;});

	circles
	 .enter()
	 .append("circle")
	 .attr("cx",function(d) { return d*50;})
	 .attr("cy",function(d) { return d*50;})
	 .attr("r",10)
	 .attr("fill","steelblue");

	circles
	 .exit()
	 .attr("fill","red");

	circles
	 .data(data)
	 .attr("cx",function(d) { return d*50;})
	 .attr("fill","green");
}