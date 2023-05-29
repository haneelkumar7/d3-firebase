const canvas = d3.select(".canvas");

const svg = canvas.append("svg")
   .attr('height', 600)
   .attr('width', 600);

// svg.attr('height', 600);
// svg.attr('width', 600);

const group = svg.append('g');

//append shapes to svg container

group.append("rect")
    .attr('width', 200)
    .attr('height', 100)
    .attr('fill', 'blue')
    .attr('x', 50)
    .attr('y', 50);

group.append("circle")
.attr('r', 50)
.attr('cx', 350)
.attr('cy',100)
.attr('fill', 'pink');

group.append("line")
.attr('x1', 450)
.attr('x2', 450)
.attr('y1', 50)
.attr('y2', 150)
.attr('stroke', 'red')
.attr('stroke-width', 4); 

svg.append("text")
.attr('x', 100)
.attr('y', 300)
.attr('fill', 'orange')
.text('Hello, Nagineni!!')
.style('font-family', 'arial');