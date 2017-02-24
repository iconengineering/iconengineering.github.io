mapboxgl.accessToken = 'pk.eyJ1IjoiaWNvbmVuZyIsImEiOiJjaXBwc2V1ZnMwNGY3ZmptMzQ3ZmJ0ZXE1In0.mo_STWygoqFqRI-od05qFg';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/iconeng/civjrd2la004z2immqynhr4fd',
    zoom: 13,
    center: [-104.705, 40.42],
    hash: true,
    preserveDrawingBuffer: true
});

var layerList = document.getElementById('menu');
var inputs = layerList.getElementsByTagName('input');

function switchLayer(layer) {
    var layerId = layer.target.value;
    map.setStyle('mapbox://styles/iconeng/' + layerId);
    $('.layer-off').prop('checked', false);
    $('.layer-on').prop('checked', true);
}

for (var i = 0; i < inputs.length; i++) {
    inputs[i].onclick = switchLayer;
}

$(document).ready(function() {
    $("#clear").click(function() {
        var checkBoxes = $("input[type=checkbox]");
        checkBoxes.prop("checked", false);
        map.setPaintProperty('watersheds','fill-opacity', 0);
        map.setPaintProperty('ponds','fill-opacity', 0);
        map.setPaintProperty('flowDepth','fill-opacity', 0);
        map.setPaintProperty('flowDepthOver','fill-opacity', 0);
        map.setPaintProperty('basinOutlines','line-opacity', 0);
        map.setPaintProperty('basinConnections','line-opacity', 0);
        map.setPaintProperty('1ftContours','line-opacity', 0);
        map.setPaintProperty('5ftContours','line-opacity', 0);
        map.setPaintProperty('velocity','line-opacity', 0);
        map.setPaintProperty('outfalls','line-opacity', 0);
        map.setPaintProperty('watershedLabels','text-opacity', 0);
        map.setPaintProperty('5ftLabels','text-opacity', 0);
        map.setPaintProperty('basinCircles','circle-opacity', 0);
        map.setLayoutProperty('basinLabels','visibility', 'none');
        map.setLayoutProperty('basinLabels2','visibility', 'none');
        map.setLayoutProperty('conduits','visibility', 'none');
        map.setLayoutProperty('conduitLabels','visibility', 'none');
        map.setLayoutProperty('conduitArrows','visibility', 'none');
        map.setLayoutProperty('junctions','visibility', 'none');
        map.setLayoutProperty('junctionLabels','visibility', 'none');
        map.setLayoutProperty('conduitComps','visibility', 'none');
        map.setLayoutProperty('conduitCompsLabels','visibility', 'none');
        map.setLayoutProperty('conduitCompsArrows','visibility', 'none');
        map.setLayoutProperty('junctionComps','visibility', 'none');
        map.setLayoutProperty('junctionCompsLabels','visibility', 'none');
    });
});

map.on('style.load', function (e) {

  map.addSource('basinOutlines', {
      type: 'geojson',
      "data": 'basinOutlines.geojson'
  });
  map.addSource('basinConnections', {
      type: 'geojson',
      "data": 'basinConnections.geojson'
  });
  map.addSource('basinPoints', {
      type: 'geojson',
      "data": 'basinPoints.geojson'
  });
  map.addSource('junctions', {
      type: 'geojson',
      "data": 'junctions.geojson'
  });
  map.addSource('conveyance', {
      type: 'geojson',
      "data": 'conveyance.geojson'
  });
  map.addSource('outfalls', {
      type: 'geojson',
      "data": 'outfalls.geojson'
  });
  map.addSource('flowDepthOver', {
      type: 'vector',
      url: 'mapbox://iconeng.92452b9f'
  });
  map.addSource('flowDepth', {
      type: 'vector',
      url: 'mapbox://iconeng.c23ab050'
  });
  map.addSource('contours', {
      type: 'vector',
      url: 'mapbox://iconeng.eda7576e'
  });
  map.addSource('velocity', {
      type: 'vector',
      url: 'mapbox://iconeng.8ad980f5'
  });
  map.addSource('testDepth', {
      type: 'vector',
      url: 'mapbox://iconeng.1t7ydkxp'
  });

  map.addLayer({
      'id': '5ftContours',
      'type': 'line',
      'source': 'contours',
      'source-layer': 'NGD_Contours',
      'filter': ['all', ['>', 'Index', 1]],
      'layout': {
          'line-join': 'round',
          'line-cap': 'round'
      },
      'paint': {
        'line-width': {
            "stops": [[15, 1], [17, 1.75], [19, 2.5]]
        },
        'line-opacity': 0,
        'line-color': '#bd925a'
      }
  },'road-label-small');
  map.addLayer({
      'id': '1ftContours',
      'type': 'line',
      'source': 'contours',
      'source-layer': 'NGD_Contours',
      'filter': ['all', ['==', 'Index', 0]],
      'layout': {
        'line-join': 'round',
        'line-cap': 'round'
      },
      'paint': {
        'line-width': {
            "stops": [[15, 0], [17, .5], [19, 1]]
        },
        'line-opacity': 0,
        'line-color': '#bd925a'
      }
  },'road-label-small');
  map.addLayer({
      'id': '5ftLabels',
      'type': 'symbol',
      'source': 'contours',
      'source-layer': 'NGD_Contours',
      'filter': ['all', ['>', 'Index', 1]],
      'layout': {
        'symbol-placement': 'line',
        'text-field': '{CONTOUR}',
        'text-font': ['Roboto Light Italic','Open Sans Light','Arial Unicode MS Regular'],
        'text-size': {
          "stops": [[15,9],[17,11],[19,13]]
        }
      },
      'paint': {
        'text-color': '#bd925a',
        'text-halo-color': '#F8F4F0',
        'text-halo-width': 2,
        'text-halo-blur': 0.5,
        'text-opacity': 0
      }
  },'road-label-small');

  map.addLayer({
      'id': 'flowDepthOver',
      'type': 'fill',
      'source': 'flowDepthOver',
      'source-layer': 'oth_rainongrid_maxflowdepth_over',
      'maxzoom':14.99,
      'paint': {
          'fill-color':{
              property: 'GRIDCODE',
              type: 'interval',
              stops: [
                  [2, 'rgb(252,244,182)'],
                  [3, 'rgb(245,194,152)'],
                  [4, 'rgb(227,147,138)'],
                  [5, 'rgb(199,101,134)'],
                  [6, 'rgb(161,59,139)'],
                  [7, 'rgb(109,23,143)'],
                  [8, 'rgb(14,9,135)']
                  ]
          },
          'fill-opacity': 0
      }
  }, 'road-label-small');

  map.addLayer({
      'id': 'flowDepth',
      'type': 'fill',
      'source': 'flowDepth',
      'source-layer': 'OTH_RainOnGrid_MaxFlowDepth',
      'filter': ['>', 'Var', 0.25],
      'paint': {
          'fill-color': {
              property: 'Var',
              type: 'interval',
              stops: [
                  [.25, 'rgb(252,244,182)'],
                  [.5, 'rgb(245,194,152)'],
                  [1, 'rgb(227,147,138)'],
                  [1.5, 'rgb(199,101,134)'],
                  [2, 'rgb(161,59,139)'],
                  [3, 'rgb(109,23,143)'],
                  [4, 'rgb(14,9,135)']
                  ]
          },
          'fill-opacity': 0
      }
  }, 'road-label-small');

  map.addLayer({
      'id': 'testDepthLine',
      'type': 'line',
      'source': 'testDepth',
      'source-layer': 'test_grid_dsgeojson',
      'filter': ['>', 'ExF2', .25],
      'maxzoom':16,
      'paint': {
          'line-color': {
              property: 'ExF2',
              type: 'interval',
              stops: [
                  [.25, 'rgb(252,244,182)'],
                  [.5, 'rgb(245,194,152)'],
                  [1, 'rgb(227,147,138)'],
                  [1.5, 'rgb(199,101,134)'],
                  [2, 'rgb(161,59,139)'],
                  [3, 'rgb(109,23,143)'],
                  [4, 'rgb(14,9,135)']
                  ]
          },
          'line-opacity': 0,
          'line-width': {"stops": [[13,2],[13.99,3],[14,2.5],[14.99,3.5],[15,3],[15.99,4]]},
          'line-gap-width':1,
          'line-blur':3
      }
  }, 'road-label-small');

  map.addLayer({
      'id': 'testDepth',
      'type': 'fill',
      'source': 'testDepth',
      'source-layer': 'test_grid_dsgeojson',
      'filter': ['>', 'ExF2', .25],
      'paint': {
          'fill-color': {
              property: 'ExF2',
              type: 'interval',
              stops: [
                  [.25, 'rgb(252,244,182)'],
                  [.5, 'rgb(245,194,152)'],
                  [1, 'rgb(227,147,138)'],
                  [1.5, 'rgb(199,101,134)'],
                  [2, 'rgb(161,59,139)'],
                  [3, 'rgb(109,23,143)'],
                  [4, 'rgb(14,9,135)']
                  ]
          },
          'fill-opacity': 0
      }
  }, 'road-label-small');

  map.addLayer({
      'id': 'velocity',
      'type': 'line',
      'source': 'velocity',
      'source-layer': 'OTH_RainOnGrid_Velocity',
      'filter': ['>', 'Var', 0.25],
      'paint': {
          'line-width': 1.2,
          'line-opacity': 0,
          'line-color': {
              property: 'Var',
              type: 'interval',
              stops: [
                  [.25, '#cfd8dc'],
                  [.5, '#acbbc1'],
                  [1, '#8c9ea6'],
                  [1.5, '#6e828b'],
                  [2, '#53666f'],
                  [3, '#3b4c54'],
                  [4, '#263238']
                  ]
          }
      }
  },'road-label-small');

  map.addLayer({
      'id': 'basinOutlines',
      'type': 'line',
      'source': 'basinOutlines',
      'paint': {
          'line-width': 1,
          'line-opacity': 1,
          'line-color': 'rgba(0,0,0,1)',
          'line-dasharray': [8,4]
      }
  });

  map.addLayer({
      'id': 'basinConnections',
      'type': 'line',
      'source': 'basinConnections',
      'paint': {
          'line-width': 1.5,
          'line-opacity': 1,
          'line-color': 'rgba(0,0,0,.62)',
          'line-dasharray': [3,1]
      }
  });

  map.addLayer({
      'id': 'basinCircles',
      'type': 'circle',
      'source': 'basinPoints',
      'paint': {
        'circle-opacity': 1,
          'circle-radius': {
              "stops": [[13, 1.5], [15, 3], [17, 4]]
          },
          'circle-color': 'rgba(0,0,0,.62)'
      }
  });

  map.addLayer({
      'id': 'outfalls',
      'type': 'line',
      'source': 'outfalls',
      'paint': {
          'line-width': 2.5,
          'line-opacity': 0,
          'line-color': '#5F4690'
      }
  });

  map.addLayer({
      'id': 'conduits',
      'type': 'line',
      'source': 'conveyance',
      'layout': {
        "visibility": 'none'
        },
      'paint': {
          'line-width': 4,
          'line-color': '#045275'
      }
  });

  map.addLayer({
      'id': 'conduitArrows',
      'type': 'symbol',
      'source': 'conveyance',
      'layout': {
        "visibility": 'none',
        'symbol-placement': 'line',
        'symbol-spacing': 50,
        "icon-image": "oneway-white-small",
        "icon-allow-overlap": true,
        "text-rotation-alignment": "map",
        "icon-size": 1,
        "text-keep-upright": false,
        "icon-padding": 0,
        "icon-ignore-placement": true
      },
      'paint': {
      }
  });

  map.addLayer({
      'id': 'conduitLabels',
      'type': 'symbol',
      'source': 'conveyance',
      'layout': {
        "visibility": 'none',
        "text-optional": true,
        'symbol-placement': 'line',
        'symbol-spacing': 100,
        'text-field': '{Name}',
        'text-font': ['Roboto Bold','Open Sans Regular','Arial Unicode MS Regular'],
        'text-size': 10,
        "text-padding": 100,
      },
      'paint': {
        'text-color': '#F8F4F0',
        'text-halo-color': '#045275',
        'text-halo-width': 1
      }
  });

  map.addLayer({
      'id': 'junctions',
      'type': 'circle',
      'source': 'junctions',
      'layout': {
         "visibility": 'none'
       },
      'paint': {
          'circle-radius': 4,
          'circle-color': '#ee4d5a'
      }
  });

  map.addLayer({
      'id': 'junctionLabels',
      'type': 'symbol',
      'source': 'junctions',
      'layout': {
         "visibility": 'none',
         "text-optional": true,
         "text-line-height": 1,
         "text-size": 12,
         "text-field": "{Name}",
         'text-font': ['Roboto Bold','Open Sans Regular','Arial Unicode MS Regular'],
         "text-offset": [0, 1],
         "text-anchor": "top"
     },
     "paint": {
       "text-color": "#ee4d5a",
       "text-halo-color": "#F8F4F0",
       "text-halo-width": 1,
     }
  });

  map.addLayer({
      'id': 'basinLabels',
      'type': 'symbol',
      'source': 'basinPoints',
      'layout': {
         "visibility": 'none',
         "text-optional": true,
         "text-line-height": 1,
         "text-size": {
             "stops": [[15, 10], [17, 12], [19, 14]]
         },
         "text-field": "{Area_round} Ac. | {Imperv}%",
         'text-font': ['Roboto Medium','Open Sans Regular','Arial Unicode MS Regular'],
         "text-offset": {
             "stops": [[13, [0, .25]], [17, [0, .75]]]
         },
         "text-anchor": "top"
     },
     "paint": {
       "text-color": "#F8F4F0",
       "text-halo-color": "rgba(0,0,0,.87)",
       "text-halo-width": {"stops": [[15,1],[17,1.25]]}
     }
  });

  map.addLayer({
      'id': 'basinLabels2',
      'type': 'symbol',
      'source': 'basinPoints',
      'layout': {
         "visibility": 'none',
         "text-optional": true,
         "text-line-height": 1,
         "text-size": {
             "stops": [[15, 10], [17, 12], [19, 14]]
         },
         "text-field": "{Name}",
         "text-offset": {
             "stops": [[13, [0, -1]], [17, [0, -1.5]]]
         },
         'text-font': ['Roboto Medium','Open Sans Regular','Arial Unicode MS Regular'],
         "text-anchor": "top"
     },
     "paint": {
       "text-color": "#F8F4F0",
       "text-halo-color": "rgba(0,0,0,.87)",
       "text-halo-width": {"stops": [[15,1],[17,1.25]]}
     }
  });

    var style = map.getStyle();

    if (style.name != 'Outdoors'){
      map.setLayoutProperty('conduitArrows','icon-image','oneway-spaced-white-small');
    };

});

var filterList = document.getElementById('filters');
var radios = filterList.getElementsByTagName('input');
var filterList2 = document.getElementById('filters2');
var radios2 = filterList2.getElementsByTagName('input');

function switchFilter() {
    var con = document.querySelector('input[name="Alt"]:checked').value;
    var cat = document.querySelector('input[name="Freq"]:checked').value;
    var concat = con + cat;
    map.setFilter('testDepth', ['>', concat, .25]);
    map.setPaintProperty('testDepth', 'fill-color', {
        property: concat,
        type: 'interval',
        stops: [
            [.25, 'rgb(252,244,182)'],
            [.5, 'rgb(245,194,152)'],
            [1, 'rgb(227,147,138)'],
            [1.5, 'rgb(199,101,134)'],
            [2, 'rgb(161,59,139)'],
            [3, 'rgb(109,23,143)'],
            [4, 'rgb(14,9,135)']
            ]
    });
    map.setFilter('testDepthLine', ['>', concat, .25]);
    map.setPaintProperty('testDepthLine', 'line-color', {
        property: concat,
        type: 'interval',
        stops: [
            [.25, 'rgb(252,244,182)'],
            [.5, 'rgb(245,194,152)'],
            [1, 'rgb(227,147,138)'],
            [1.5, 'rgb(199,101,134)'],
            [2, 'rgb(161,59,139)'],
            [3, 'rgb(109,23,143)'],
            [4, 'rgb(14,9,135)']
            ]
    });
}

for (var i = 0; i < radios.length; i++) {
    radios[i].onclick = switchFilter;
}

for (var i = 0; i < radios2.length; i++) {
    radios2[i].onclick = switchFilter;
}


map.on('click', function (e) {
  var features = map.queryRenderedFeatures(e.point, { layers: ['testDepth'] });
  if (!features.length) {
      return;
  }

  var feature = features[0];
  var id = feature.layer.id

    if (id == 'conduits' || id == 'junctions'){

      var data = [{name: "2yr", value: feature.properties.Result_2},
                  {name: "10yr", value: feature.properties.Result_10},
                  {name: "100yr", value: feature.properties.Result_100}];

    var	margin = {top: 10, right: 40, bottom: 30, left: 50},
        width = 240 - margin.left - margin.right,
        height = 240 - margin.top - margin.bottom;

        var x = d3.scaleBand()
            .rangeRound([0, width])
            .paddingInner(0.1);

        var y = d3.scaleLinear()
            .range([height, 0]);

        var z = d3.scaleOrdinal()
            .range(['#089099','#00718b','#045275']);

      var div = window.document.createElement('div');
      if (id == 'conduits' && feature.properties.Shape1 == 'IRREGULAR') {
        div.innerHTML = '<div class="row"><b>Conduit ' + feature.properties.Name + '</b><br />Irregular</div>';
      } else if (id == 'conduits' && feature.properties.Shape1 == 'CIRCULAR') {
        div.innerHTML = '<div class="row"><b>Conduit ' + feature.properties.Name + '</b><br />' + feature.properties.Geom1 + 'ft Circular</div>';
      } else if (id == 'conduits' && feature.properties.Shape1 == 'RECT_CLOSED') {
        div.innerHTML = '<div class="row"><b>Conduit ' + feature.properties.Name + '</b><br />' + feature.properties.Geom1 + 'ft x ' + feature.properties.Geom2 + 'ft Box</div>';
      } else {
        div.innerHTML = '<div class="row"><b>Junction ' + feature.properties.Name + '</b></div>';
      };

      var	svg = d3.select(div)
        .append("svg")
          .attr("class", "xs")
          .attr("width", width + margin.left + margin.right)
          .attr("height", height + margin.top + margin.bottom)
        .append("g")
          .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

          d3.select(".xs").selectAll(".bar").remove()

          x.domain(data.map(function(d) { return d.name; }));
          y.domain([0, d3.max(data, function(d) {
            if (d.value <= 100) {return 100}
            else if (d.value <= 500) {return 500}
            else if (d.value <= 1000) {return 1000}
            else 	{ return 1500 }
            ;})
          ]);

          svg.selectAll(".bar")
              .data(data)
            .enter().append("rect")
              .attr("x", function(d) { return x(d.name); })
              .attr("width", x.bandwidth())
              .attr("y", function(d) { return height; })
              .attr("height", 0)
              .attr("fill", function(d) { return z(d.name); })
              .transition()
              .delay(function (d, i) { return i*100; })
              .attr("height", function(d) { return height - y(d.value); })
              .attr("y", function(d) { return y(d.value); });

          svg.selectAll("text.bar")
              .data(data)
            .enter().append("text")
              .attr("class", "bar")
              .attr("text-anchor", "middle")
              .attr("x", function(d) { return x(d.name) + 23; })
              .attr("y", function(d) {
                if (height - y(d.value) < 20) { return y(d.value) - 5; }
                else { return y(d.value) + 12; }
                ;})
              .attr("fill", function(d) {
                if (height - y(d.value) < 20) { return '#000' }
                else { return '#fff' }
                ;})
              .attr('font-size', '10px')
              .attr('font-weight', 'bold')
              .text(function(d) { return d.value; });

          // Add the X Axis
          svg.append("g")
              .attr("transform", "translate(0," + height + ")")
              .call(d3.axisBottom(x).tickSizeOuter(0));

          // Add the Y Axis
          svg.append("g")
              .call(d3.axisLeft(y).ticks(4))
            .append("text")
              .attr("transform", "rotate(-90)")
              .attr("y", 3)
              .attr("dy", ".71em")
              .attr("font-size", 8)
              .attr("fill", "#000")
              .style("text-anchor", "end")
              .text("cfs");

        function type(d) {
          d.value = +d.value;
          return d;
        }

      var d3popup = new mapboxgl.Popup()
          .setLngLat(e.lngLat)
          .setDOMContent(div)
          .addTo(map);
    } else if (id == 'conduitComps' || id == 'junctionComps'){
      var data = [{name: "2yr", value: feature.properties.Result_2, value2: feature.properties.ACE05_Q2},
                  {name: "10yr", value: feature.properties.Result_10, value2: feature.properties.ACE05_Q10},
                  {name: "100yr", value: feature.properties.Result_100, value2: feature.properties.ACE05_Q100}];

    var	margin = {top: 10, right: 40, bottom: 30, left: 50},
        width = 240 - margin.left - margin.right,
        height = 240 - margin.top - margin.bottom;

        var x = d3.scaleBand()
            .rangeRound([0, width])
            .paddingInner(0.1);

        var y = d3.scaleLinear()
            .range([height, 0]);

        var z0 = d3.scaleOrdinal()
            .range(['#089099','#00718b','#045275']);

        var z1 = d3.scaleOrdinal()
            .range(['#dd686c','#ca5268','#b13f64']);



      var div = window.document.createElement('div');
      if (id == 'conduitComps' && feature.properties.Shape1 == 'IRREGULAR') {
        div.innerHTML = '<div class="row"><b>Conduit ' + feature.properties.Name + '</b><br />Irregular<br /><small><span style="font-weight: bold;color: #ca5268;">2005 ACE Study</span> | <span style="font-weight: bold;color: #00718b;">2016 ICON Study</span></small></div>';
      } else if (id == 'conduitComps' && feature.properties.Shape1 == 'CIRCULAR') {
        div.innerHTML = '<div class="row"><b>Conduit ' + feature.properties.Name + '</b><br />' + feature.properties.Geom1 + 'ft Circular<br /><small><span style="font-weight: bold;color: #ca5268;">2005 ACE Study</span> | <span style="font-weight: bold;color: #00718b;">2016 ICON Study</span></small></div>';
      } else if (id == 'conduitComps' && feature.properties.Shape1 == 'RECT_CLOSED') {
        div.innerHTML = '<div class="row"><b>Conduit ' + feature.properties.Name + '</b><br />' + feature.properties.Geom1 + 'ft x ' + feature.properties.Geom2 + 'ft Box<br /><small><span style="font-weight: bold;color: #ca5268;">2005 ACE Study</span> | <span style="font-weight: bold;color: #00718b;">2016 ICON Study</span></small></div>';
      }  else {
        div.innerHTML = '<div class="row"><b>Junction ' + feature.properties.Name + '</b><br /><small><span style="font-weight: bold;color: #ca5268;">2005 ACE Study</span> | <span style="font-weight: bold;color: #00718b;">2016 ICON Study</span></small></div>';
      };

      var	svg = d3.select(div)
        .append("svg")
          .attr("class", "xs")
          .attr("width", width + margin.left + margin.right)
          .attr("height", height + margin.top + margin.bottom)
        .append("g")
          .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

          d3.select(".xs").selectAll(".bar").remove()

          x.domain(data.map(function(d) { return d.name; }));
          y.domain([0, d3.max(data, function(d) {
            if (d.value <= 100 && d.value2 <= 100) {return 100}
            else if (d.value <= 500 && d.value2 <= 500) {return 500}
            else if (d.value <= 1000 && d.value2 <= 1000) {return 1000}
            else 	{ return 1500 }
            ;})
          ]);

          svg.selectAll(".bar")
              .data(data)
            .enter().append("rect")
              .attr("x", function(d) { return x(d.name) + 23; })
              .attr("width", function(d) { return x.bandwidth() / 2 } )
              .attr("y", function(d) { return height; })
              .attr("height", 0)
              .attr("fill", function(d) { return z0(d.name); })
              .transition()
              .delay(function (d, i) { return i*100; })
              .attr("height", function(d) { return height - y(d.value); })
              .attr("y", function(d) { return y(d.value); });

          svg.selectAll(".bar")
              .data(data)
            .enter().append("rect")
              .attr("x", function(d) { return x(d.name); })
              .attr("width", function(d) { return x.bandwidth() / 2 } )
              .attr("y", function(d) { return height; })
              .attr("height", 0)
              .attr("fill", function(d) { return z1(d.name); })
              .transition()
              .delay(function (d, i) { return i*100; })
              .attr("height", function(d) { return height - y(d.value2); })
              .attr("y", function(d) { return y(d.value2); });

          svg.selectAll("text.bar")
              .data(data)
            .enter().append("text")
              .attr("class", "bar")
              .attr("text-anchor", function(d) {
                if (height - y(d.value) < 40) { return "start" }
                else { return "end" }
                ;})
              .attr("transform", "rotate(-90)")
              .attr("y", function(d) { return x(d.name) + 38; })
              .attr("x", function(d) {
                if (height - y(d.value) < 40) { return -y(d.value) + 2; }
                else { return -y(d.value) - 4; }
                ;})
              .attr("fill", function(d) {
                if (height - y(d.value) < 40) { return '#000' }
                else { return '#fff' }
                ;})
              .attr('font-size', '10px')
              .attr('font-weight', 'bold')
              .text(function(d) { return d.value; });

          svg.selectAll("text.bar2")
              .data(data)
            .enter().append("text")
              .attr("class", "bar2")
              .attr("text-anchor", function(d) {
                if (height - y(d.value2) < 40) { return "start" }
                else { return "end" }
                ;})
              .attr("transform", "rotate(-90)")
              .attr("y", function(d) { return x(d.name) + 15; })
              .attr("x", function(d) {
                if (height - y(d.value2) < 40) { return -y(d.value2) + 2; }
                else { return -y(d.value2) - 4; }
                ;})
              .attr("fill", function(d) {
                if (height - y(d.value2) < 40) { return '#000' }
                else { return '#fff' }
                ;})
              .attr('font-size', '10px')
              .attr('font-weight', 'bold')
              .text(function(d) { return d.value2; });


          // Add the X Axis
          svg.append("g")
              .attr("transform", "translate(0," + height + ")")
              .call(d3.axisBottom(x).tickSizeOuter(0));

          // Add the Y Axis
          svg.append("g")
              .call(d3.axisLeft(y).ticks(4))
            .append("text")
              .attr("transform", "rotate(-90)")
              .attr("y", 3)
              .attr("dy", ".71em")
              .attr("font-size", 8)
              .attr("fill", "#000")
              .style("text-anchor", "end")
              .text("cfs");

        function type(d) {
          d.value = +d.value;
          return d;
        }

      var d3popup = new mapboxgl.Popup()
          .setLngLat(e.lngLat)
          .setDOMContent(div)
          .addTo(map);
        } else if (id == 'basinLabels2'){

          var col = feature.properties.Name;
          console.log(col);

          var	margin = {top: 10, right: 40, bottom: 30, left: 50},
            	width = 240 - margin.left - margin.right,
            	height = 240 - margin.top - margin.bottom;

            var	x = d3.scaleLinear().range([0, width]);
            var	y = d3.scaleLinear().range([height, 0]);

            var	valueline = d3.line()
              .curve(d3.curveMonotoneX)
            	.x(function(d) { return x(d.date); })
            	.y(function(d) { return y(d.basin100); });

            var	valueline2 = d3.line()
              .curve(d3.curveMonotoneX)
            	.x(function(d) { return x(d.date); })
            	.y(function(d) { return y(d.basin10); });

            var	valueline3 = d3.line()
              .curve(d3.curveMonotoneX)
              .x(function(d) { return x(d.date); })
              .y(function(d) { return y(d.basin2); });

            var div = window.document.createElement('div');
            div.innerHTML = '<div class="row"><b>Sub-basin ' + feature.properties.Name + ' Hydrograph</b><br /><small><span style="font-weight: bold;color: #d0587e;">2-Year</span> | <span style="font-weight: bold;color: #ef6a4c;">10-Year</span> | <span style="font-weight: bold;color: #00718b;">100-Year</span></small></div>';

            var	svg = d3.select(div)
            	.append("svg")
            		.attr("width", width + margin.left + margin.right)
            		.attr("height", height + margin.top + margin.bottom)
            	.append("g")
            		.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

            // Get the 100 year data
            d3.csv("hydrographs-100.csv", function(error, data) {
            	data.forEach(function(d) {
            		d.date = +d.Time / 60;
            		d.basin100 = +d[col];
            	});

              x.domain([0,12]);
              y.domain([0, d3.max(data, function(d) {
                if (d.basin100 <= 100) {return 100}
                else if (d.basin100 <= 500) {return 500}
                else if (d.basin100 <= 1000) {return 1000}
                else 	{ return 1500 }
                ;})
              ]);

            	var graph = svg.append("path")		// Add the valueline path.
            		.attr("class", "line")
                .style("stroke", "#00718b")
            		.attr("d", valueline(data));

                var totalLength = graph.node().getTotalLength();

                graph
                  .attr("stroke-dasharray", totalLength + " " + totalLength)
                  .attr("stroke-dashoffset", totalLength)
                  .transition()
                    .duration(1000)
                    .ease(d3.easeLinear)
                    .attr("stroke-dashoffset", 0);

                    // Add the X Axis
                    svg.append("g")
                        .attr("transform", "translate(0," + height + ")")
                        .call(d3.axisBottom(x).tickSizeOuter(0).ticks(6));

                    // text label for the x axis
                    svg.append("text")
                        .attr("transform",
                              "translate(" + (width/2) + " ," +
                                             (height + margin.top + 20) + ")")
                        .style("text-anchor", "middle")
                        .attr("font-size", 9)
                        .attr("font-style", "italic")
                        .text("Hours");

                    // Add the Y Axis
                    svg.append("g")
                        .call(d3.axisLeft(y).ticks(4))
                      .append("text")
                        .attr("transform", "rotate(-90)")
                        .attr("y", 3)
                        .attr("dy", ".71em")
                        .attr("font-size", 8)
                        .attr("font-style", "italic")
                        .attr("fill", "#000")
                        .style("text-anchor", "end")
                        .text("cfs");
              });

              // Get the 10 year data
              d3.csv("hydrographs-10.csv", function(error, data) {
              	data.forEach(function(d) {
              		d.date = +d.Time / 60;
              		d.basin10 = +d[col];
              	});

                var graph = svg.append("path")		// Add the valueline2 path.
              		.attr("class", "line")
              		.style("stroke", "#ef6a4c")
              		.attr("d", valueline2(data));

                  var totalLength = graph.node().getTotalLength();

                  graph
                    .attr("stroke-dasharray", totalLength + " " + totalLength)
                    .attr("stroke-dashoffset", totalLength)
                    .transition()
                      .duration(1000)
                      .ease(d3.easeLinear)
                      .attr("stroke-dashoffset", 0);
                });

                // Get the 2 year data
                d3.csv("hydrographs-2.csv", function(error, data) {
                	data.forEach(function(d) {
                		d.date = +d.Time / 60;
                		d.basin2 = +d[col];
                	});

                  var graph = svg.append("path")		// Add the valueline3 path.
                		.attr("class", "line")
                		.style("stroke", "#d0587e")
                		.attr("d", valueline3(data));

                    var totalLength = graph.node().getTotalLength();

                    graph
                      .attr("stroke-dasharray", totalLength + " " + totalLength)
                      .attr("stroke-dashoffset", totalLength)
                      .transition()
                        .duration(1000)
                        .ease(d3.easeLinear)
                        .attr("stroke-dashoffset", 0);
                  });

            var d3popup = new mapboxgl.Popup()
                .setLngLat(e.lngLat)
                .setDOMContent(div)
                .addTo(map);
          } else if (id == "testDepth") {

            var data = [{con: "Ex", name: "100yr", value: feature.properties.ExF100},
                {con: "Alt1", name: "100yr", value: feature.properties.A1F100},
                {con: "Alt2", name: "100yr", value: feature.properties.A2F100},
                {con: "Alt3", name: "100yr", value: feature.properties.A3F100},
                {con: "Alt4", name: "100yr", value: feature.properties.A4F100},
                {con: "Ex", name: "50yr", value: feature.properties.ExF50},
                {con: "Alt1", name: "50yr", value: feature.properties.A1F50},
                {con: "Alt2", name: "50yr", value: feature.properties.A2F50},
                {con: "Alt3", name: "50yr", value: feature.properties.A3F50},
                {con: "Alt4", name: "50yr", value: feature.properties.A4F50},
                {con: "Ex", name: "10yr", value: feature.properties.ExF10},
                {con: "Alt1", name: "10yr", value: feature.properties.A1F10},
                {con: "Alt2", name: "10yr", value: feature.properties.A2F10},
                {con: "Alt3", name: "10yr", value: feature.properties.A3F10},
                {con: "Alt4", name: "10yr", value: feature.properties.A4F10},
                {con: "Ex", name: "5yr", value: feature.properties.ExF5},
                {con: "Alt1", name: "5yr", value: feature.properties.A1F5},
                {con: "Alt2", name: "5yr", value: feature.properties.A2F5},
                {con: "Alt3", name: "5yr", value: feature.properties.A3F5},
                {con: "Alt4", name: "5yr", value: feature.properties.A4F5},
                {con: "Ex", name: "2yr", value: feature.properties.ExF2},
                {con: "Alt1", name: "2yr", value: feature.properties.A1F2},
                {con: "Alt2", name: "2yr", value: feature.properties.A2F2},
                {con: "Alt3", name: "2yr", value: feature.properties.A3F2},
                {con: "Alt4", name: "2yr", value: feature.properties.A4F2}];

    var	margin = {top: 10, right: 40, bottom: 30, left: 50},
        width = 360 - margin.left - margin.right,
        height = 360 - margin.top - margin.bottom;

        var x = d3.scalePoint()
            .rangeRound([0, width]);

        var y = d3.scaleLinear()
            .range([height, 0]);

            var z0 = d3.scaleOrdinal()
                  .range(['#00C853','#AA00FF','#0091EA','#FFAB00'])
            			.domain(data.map(function(d) { return d.con; }));

          var z1 = d3.scaleOrdinal()
                  .range(["#263238",'#00C853','#AA00FF','#0091EA','#FFAB00'])
            			.domain(data.map(function(d) { return d.con; }));

            var div = window.document.createElement('div');

            var	svg = d3.select(div)
              .append("svg")
                .attr("class", "xs")
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom)
              .append("g")
                .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


                x.domain(data.map(function(d) { return d.name; }));
                y.domain([0, d3.max(data, function(d) {
                  if (d.value <= 2) {return 2}
                  else if (d.value <= 4) {return 4}
                  else if (d.value <= 8) {return 8}
                  else 	{ return d.value }
                  ;})
                ]);

          	var nestData = d3.nest().key(function(d) { return d.con; }).entries(data);

          	var area = d3.area()
                      .x(function(d) { return x(d.name); })
                      .y0(function(d) { return y(d.value); })
                      .y1(function(d) { return y(0); });
          	var subjectPath = d3.line()
                     .x(function(d) {
                       return x(d.name);
                       })
                     .y(function(d) {
                       return y(d.value);
                       });

          nestData.forEach(function(d) {
            if (d.key != "Ex") {
              svg.append("path")
                  .attr("class", "trend")
                  .attr("d", subjectPath(d.values));
            } else {
               svg.append("path")
                  .style("fill", "#263238")
                  .style("fill-opacity", .1)
                  .style("stroke", "#607D8B")
                  .attr("d", area(d.values));
            }

          });

          svg.selectAll(".trend")
          		.data(data)
              .attr("stroke", function(d) { return z0(d.con); })

          svg.selectAll(".dot")
            .data(data)
          .enter().append("circle")
            .attr("class", "dot")
            .attr("r", 3.5)
            .attr("cx", function(d) { return x(d.name); })
            .attr("cy", function(d) { return y(d.value); })
          	.attr("stroke", function(d) { if (d.con != "Ex"){ return z1(d.con); } else { return '#607D8B';}})
          	.style("fill", "none");

    svg.append("text")
                .attr("y", 10)
                .attr("x", 265)
                .attr("font-size", 10)
                .attr("font-weight", "bold")
                .attr("fill", "#00C853")
                .style("text-anchor", "end")
                .text("Alt 1");

            svg.append("text")
                .attr("y", 22)
                .attr("x", 265)
                .attr("font-size", 10)
                .attr("font-weight", "bold")
                .attr("fill", "#AA00FF")
                .style("text-anchor", "end")
                .text("Alt 2");
    svg.append("text")
                .attr("y", 34)
                .attr("x", 265)
                .attr("font-size", 10)
                .attr("font-weight", "bold")
                .attr("fill", "#0091EA")
                .style("text-anchor", "end")
                .text("Alt 3");

            svg.append("text")
                .attr("y", 46)
                .attr("x", 265)
                .attr("font-size", 10)
                .attr("font-weight", "bold")
                .attr("fill", "#FFAB00")
                .style("text-anchor", "end")
                .text("Alt 4");


          // Add the X Axis
          svg.append("g")
              .attr("transform", "translate(0," + height + ")")
              .call(d3.axisBottom(x).tickSizeInner(-height).tickPadding(10).tickSizeOuter(0));

          // Add the Y Axis
          svg.append("g")
              .call(d3.axisLeft(y).tickSizeInner(-width).ticks(4).tickPadding(5).tickSizeOuter(0))
            .append("text")
              .attr("transform", "rotate(-90)")
              .attr("y", 3)
              .attr("dy", ".71em")
              .attr("font-size", 8)
              .attr("fill", "#000")
              .style("text-anchor", "end")
              .text("ft");

        function type(d) {
          d.value = +d.value;
          return d;
        }

        var d3popup = new mapboxgl.Popup()
            .setLngLat(e.lngLat)
            .setDOMContent(div)
            .addTo(map);

          } else { return; }
    });

map.on('mousemove', function (e) {
    var features = map.queryRenderedFeatures(e.point, { layers: ['testDepth'] });

    map.getCanvas().style.cursor = (features.length) ? 'pointer' : '';

});

map.addControl(new mapboxgl.NavigationControl(), 'top-right');
