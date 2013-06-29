function setup(data) {
	var graph = d3.select("#graph");
	var g = graph
			   .append("svg")
			   .append("g");
	return g;
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
	 .transition()
	 .duration(1000) 
	 .attr("y",y)
	 .attr("height",function(d) { return 400 - y(d);});	 

	rects
	 .exit()
	 .remove();
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
	 .attr("fill","steelblue")
	 .on("mouseover",function(){
	 	d3.select(this).attr('fill', 'red');
	 })
	 .on("mouseout",function(){
	 	d3.select(this).attr('fill', 'steelblue');
	 });

	rects
	 .transition()
	 .duration(1000) 
	 .attr("y",y)
	 .attr("height",function(d) { return 400 - y(d);});	 

	rects
	 .exit()
	 .remove();
}
