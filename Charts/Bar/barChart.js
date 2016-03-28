const w = 800;
const h = 450;
const margin = { top: 20, right: 20, bottom: 20, left: 20 }
const width = w - margin.left - margin.right;
const height = h - margin.top - margin.bottom;
const data = [132, 71, 337, 93, 78, 43, 20, 16, 30, 8, 17, 21];

const x = d3.scale.linear()
  .domain([0, d3.max(data)])
  .range([0, width]);

const y = d3.scale.linear()
  .domain([0, data.length])
  .range([0, height]);

const svg = d3.select('body').append('svg')
  .attr('id', 'chart')
  .attr('width', w)
  .attr('height', h);

const chart = svg.append('g')
  .classed('display', true)
  .attr('transform', 'translate(' + margin.right + ',' + margin.top + ')');

function plot(params) {
  this.selectAll('.bar')
    .data(params.data)
    .enter()
    .append('rect')
    .classed('bar', true)
    .attr('x', 0)
    .attr('y', (d, i) => y(i))
.attr('width', (d, i) => x(d))
.attr('height', (d, i) => y(1) - 1);

  this.selectAll('.bar-label')
    .data(params.data)
    .enter()
    .append('text')
    .classed('bar-label', true)
    .attr('dx', -4)
    .attr('x', (d, i) => x(d))
.attr('dy', () => y(1) / 1.5 + 2)
.attr('y', (d, i) => y(i))
.text((d, i) => d);
}

plot.call(chart, {data:data})
