const data = [
    {width: 200, height: 400, fill: 'purple'},
    {width: 100, height: 60, fill: 'red'},
    {width: 50, height: 30, fill: 'pink'}
];

const svg = d3.select('svg');

const rect = svg.selectAll('rect')
    .data(data)
    .attr('width', (d) => d.width )
    .attr('height', (d) => d.height )
    .attr('fill', (d) => d.fill );

console.log(rect);