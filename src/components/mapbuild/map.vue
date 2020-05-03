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

const distMapZone = {
"209":"Araria",
"240":"Arwal",
"235":"Aurangabad",
"225":"Banka",
"222":"Begusarai",
"224":"Bhagalpur",
"231":"Bhojpur",
"232":"Buxar",
"215":"Darbhanga",
"204":"East Champaran",
"236":"Gaya",
"217":"Gopalganj",
"238":"Jamui",
"239":"Jehanabad",
"233":"Kaimur",
"212":"Katihar",
"223":"Khagaria",
"210":"Kishanganj",
"227":"Lakhisarai",
"213":"Madhepura",
"207":"Madhubani",
"226":"Munger",
"216":"Muzaffarpur",
"229":"Nalanda",
"237":"Nawada",
"230":"Patna",
"211":"Purnia",
"234":"Rohtas",
"214":"Saharsa",
"221":"Samastipur",
"219":"Saran",
"228":"Sheikhpura",
"205":"Sheohar",
"206":"Sitamarhi",
"218":"Siwan",
"208":"Supaul",
"220":"Vaishali",
"203":"West Champaran",
};

const d3 = require('d3');
const topojson = require('topojson');
import serviceData from './../../services/index.js';


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
      serviceData.getDistrictZones()
        .then(zoneData => {
                  g
          .selectAll('.state')
          .data(topojson.feature(us, us.objects.Bihar).features)
          .enter()
          .append("path")
          .attr("class", function(d){
            var zoneClass = "";
            //console.log(zoneData);
            for(var i=0;i<zoneData.length;i++){
            if(distMapZone[d.properties.Dist_Code] == zoneData[i].district){
              if(zoneData[i].zone == "Green"){
                  zoneClass = "stateG";
              }else if(zoneData[i].zone == "Orange"){
                  zoneClass = "stateO";
              }else{
                  zoneClass = "stateR";
              }
              break;
            }
          }
            //console.log(zoneClass);
            return zoneClass;
          })
          .attr("d", path)
          .on('mouseover', function(d) {
            v.$emit('stateSelected', d.properties.Dist_Name)
              })
          .on('mouseout', function(d) {
            v.$emit('stateDeselected', d.properties.Dist_Name)
          })
    });
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
.stateG {
  fill: #008000;
  stroke: #fff;
}
.stateR {
  fill: #FF0000	;
  stroke: #fff;
}
.stateO {
  fill: #FFA500;
  stroke: #fff;
}
.state:hover {
  fill: steelblue;
}
</style>
