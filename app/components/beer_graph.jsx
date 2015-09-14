import React from 'react';
import d3 from 'd3';

class BeerGraph extends React.Component {

  constructor(props) {
    super(props);
  }

  xScale() {
    return d3
             .scale
             .linear()
             .domain([0, 3])
             .range([0, this.props.width]);
  }

  yScale() {
    return d3
             .scale
             .linear()
             .domain([0, max])
             .range([this.props.height, 0]);
  }

  data() {
    return [
      { x: 0, y: this.props.beer.abv  },
      { x: 1, y: this.props.beer.hops },
      { x: 2, y: this.props.beer.malt },
      { x: 3, y: this.props.beer.sour }
    ];
  }

  path() {
    let max = 10,
        xScale = this.xScale(),
        yScale = this.yScale();

    return d3
             .svg
             .line()
             .x(function(d) { return xScale(d.x); })
             .y(function(d) { return yScale(d.y); })
             .interpolate('linear');
  }

  render() {
    let path = this.path();
    let data = this.data();

    return (
      <svg width={this.props.width} height={this.props.height}>
        <path d={path(data)} stroke='blue' strokeWidth='2' fill="none" />
      </svg>
    );
  }
}

export default BeerGraph;
