const data = [
    {width: 200, height: 400, fill: 'purple'},
    {width: 100, height: 60, fill: 'red'},
    {width: 50, height: 30, fill: 'pink'}
];

const svg = d3.select('svg');

//joining data to rects
const rects = svg.selectAll('rect')
    .data(data)

// add attrs to rects already in the DOM
rects.attr('width', (d) => d.width )
.attr('height', (d) => d.height )
.attr('fill', (d) => d.fill );

// append the enter selection to the DOM

rects.enter().append('rect')
    .attr('width', (d) => d.width )
    .attr('height', (d) => d.height )
    .attr('fill', (d) => d.fill );