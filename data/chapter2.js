function setup(data) {
	var graph = d3.select("#graph");
	var g = graph
			   .append("svg")
			   .append("g");
	return g;
}

function draw(svg, data) {

	var y = d3.scale.linear().range([0,400]);
	y.domain(d3.extent(data));

	svg.selectAll("rect")
	 .data(data)
	 .enter()
	 .append("rect")
	 .attr("x",function(d,i) { return i*50;})
	 .attr("height",y)
	 .attr("width",30)
	 .attr("fill","steelblue");
}

function draw(svg, data) {

	var y = d3.scale.linear().range([0,400]);
	y.domain(d3.extent(data).reverse());

	var rects = svg.selectAll("rect")
	 .data(data);

	rects
     .enter()
	 .append("rect")
	 .attr("x",function(d,i) { return i * 50; })
	 .attr("width",30)
	 .attr("fill","steelblue");

	rects
	 .attr("y",y)
	 .attr("height",function(d) { return 400 - y(d);});	 

	rects
	 .exit()
	 .remove();
}

function draw(svg, data) {

	var y = d3.scale.linear().range([0,400]);
	y.domain(d3.extent(data).reverse());

	var x = d3.scale.ordinal()
			  .rangeRoundBands([0, 400], .1);
	x.domain(d3.range(data.length));

	var rects = svg.selectAll("rect")
	 .data(data)

	rects
     .enter()
	 .append("rect")
	 .attr("x",function(d,i) { return x(i); })
	 .attr("width",x.rangeBand())
	 .attr("fill","steelblue");

	rects
	 .attr("y",y)
	 .attr("height",function(d) { return 400 - y(d);});	 

	rects
	 .exit()
	 .remove();
}