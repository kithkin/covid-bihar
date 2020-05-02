<!--

It would be great if you color the map by population using data from index.vue

Based on:
  http://bl.ocks.org/rveciana/a2a1c21ca1c71cd3ec116cc911e5fce9
  http://bl.ocks.org/mapsam/6083585

Links:

-->

<template>
  <svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 300 210" pointer-events="auto"></svg>
</template>

<script>

const d3 = require('d3');
const topojson = require('topojson');

const json = require('./static/data/bihar.json');

export default {
  mounted: function() {
    var v = this;
    var svg = d3.select(this.$el);
    var width = +svg.attr('width');
    var height = +svg.attr('height');

    width = width*height;
    height = width*height;

    var projection = d3.geoMercator();
   
    var path = d3.geoPath().projection(projection);

    var func = function(us) {
      var g = svg.append('g');
        g
          .selectAll('.state')
          .data(topojson.feature(us, us.objects.Bihar).features)
          .enter()
          .append("path")
          .attr("class", "state")
          .attr("d", path)
          .on('mouseover', function(d) {
            v.$emit('stateSelected', d.properties.Dist_Name)
              })
          .on('mouseout', function(d) {
            v.$emit('stateDeselected', d.properties.Dist_Name)
          })
      g.attr('transform', 'scale(1.0)')
    };

    func(json);

  }
  // TODO: fire events
}
</script>

<style>
.state {
  fill: #ccc;
  stroke: #fff;
}
.state:hover {
  fill: steelblue;
}
</style>
