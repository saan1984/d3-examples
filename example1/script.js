var svg = d3.select('body').append('svg')
    .attr('height',400).attr('width', 400);

var circle= svg.append("circle")
    .attr('cx', 30).attr('cy', 30).attr('r', 30).attr('fill', '#999');

var rectangle= svg.append("rect")
    .attr('x', 70).attr('y', 10).attr('width', 30).attr('height', 40).attr('fill', '#000');

var ellipse= svg.append("ellipse")
    .attr('cx', 150).attr('cy', 30).attr('rx', 25).attr('ry', 10).attr('fill', '#999');

var line= svg.append("line")
    .attr('x1', 200).attr('y1', 10).attr('x2', 300).attr('y2', 10).attr('stroke', '#000');

