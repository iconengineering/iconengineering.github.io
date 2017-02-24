
mapboxgl.accessToken = 'pk.eyJ1IjoiaWNvbmVuZyIsImEiOiJjaXBwc2V1ZnMwNGY3ZmptMzQ3ZmJ0ZXE1In0.mo_STWygoqFqRI-od05qFg';
if (!mapboxgl.supported()) {
    alert('Your browser does not support Mapbox GL');
} else {
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/iconeng/cihxv74vo00oynpm48wsujwo3',
    zoom: 14,
    center: [-105.27, 40]
});

var layerList = document.getElementById('menu');
var inputs = layerList.getElementsByTagName('input');

function switchLayer(layer) {
    var layerId = layer.target.value;
    map.setStyle('mapbox://styles/iconeng/' + layerId);
    document.getElementById('contour').checked = true;
    document.getElementById('floodZones').checked = true;
    document.getElementById('hhz').checked = true;
    document.getElementById('centerline').checked = true;
    document.getElementById('bfe').checked = true;
    document.getElementById('xs').checked = true;
}

for (var i = 0; i < inputs.length; i++) {
    inputs[i].onclick = switchLayer;
}

map.on('style.load', function () {

    map.addSource('5ftContours', {
        type: 'vector',
        url: 'mapbox://iconeng.8e23d2ea'
    });
    map.addSource('1ftContours', {
        type: 'vector',
        url: 'mapbox://iconeng.e1bdc7dc'
    });
    map.addSource('sbk-hydraulics', {
        type: 'vector',
        url: 'mapbox://iconeng.32d95d2f'
    });

    map.addLayer({
        'id': '5ftContours',
        'type': 'line',
        'source': '5ftContours',
        'source-layer': 'SBK_COB_2013_5ft_Contours',
        'layout': {
            'line-join': 'round',
            'line-cap': 'round'
        },
        'paint': {
          'line-width': {
              "stops": [[15, 1], [17, 1.75], [19, 2.5]]
          },
          'line-opacity': {
              "stops": [[16, 0.7],[19, 1]]
          },
            'line-color': '#b68054'
        }
    });
    map.addLayer({
        'id': '1ftContours',
        'type': 'line',
        'source': '1ftContours',
        'source-layer': 'SBK_COB_2013_1ft_Contours_',
        'layout': {
            'line-join': 'round',
            'line-cap': 'round'
        },
        'paint': {
          'line-width': {
              "stops": [[15, 0], [17, .5], [19, 1]]
          },
          'line-opacity': {
              "stops": [[16, 0.7],[19, 1]]
          },
            'line-color': '#b68054'
        }
    });
    map.addLayer({
        'id': '5ftLabels',
        'type': 'symbol',
        'source': '5ftContours',
        'source-layer': 'SBK_COB_2013_5ft_Contours',
        'layout': {
          'symbol-placement': 'line',
          'text-field': '{CONTOUR}',
          'text-font': ['DIN Offc Pro Light','Open Sans Light','Arial Unicode MS Regular'],
          'text-size': {
            "stops": [[15,12],[17,14],[19,18]]
          }
        },
        'paint': {
          'text-color': '#b68054',
          'text-halo-color': 'rgba(255,255,235,0.9)',
          'text-halo-width': 2,
          'text-halo-blur': 0.5
        }
    });
    map.addLayer({
        'id': 'zoneX',
        'type': 'fill',
        'source': 'sbk-hydraulics',
        'source-layer': 'EC_Zone_X',
        'layout': {
        },
        'paint': {
            'fill-opacity': 0.6,
            'fill-color': '#FF8C00',
            'fill-outline-color': '#D2691E'
        }
    });
    map.addLayer({
        'id': 'zoneAO1',
        'type': 'fill',
        'source': 'sbk-hydraulics',
        'source-layer': 'EC_Zone_AO_1_ft',
        'layout': {
        },
        'paint': {
            'fill-opacity': 0.6,
            'fill-color': '#b8f3ff',
            'fill-outline-color': '#8ac6d0'
        }
    });
    map.addLayer({
        'id': 'zoneAO2',
        'type': 'fill',
        'source': 'sbk-hydraulics',
        'source-layer': 'EC_Zone_AO_2_ft',
        'layout': {
        },
        'paint': {
            'fill-opacity': 0.6,
            'fill-color': '#e980fc',
            'fill-outline-color': '#b96ac9'
        }
    });
    map.addLayer({
        'id': 'zoneAO3',
        'type': 'fill',
        'source': 'sbk-hydraulics',
        'source-layer': 'EC_Zone_AO_3_ft',
        'layout': {
        },
        'paint': {
            'fill-opacity': 0.6,
            'fill-color': '#324A5F',
            'fill-outline-color': '#1B2A41'
        }
    });
    map.addLayer({
        'id': 'gutter',
        'type': 'line',
        'source': 'sbk-hydraulics',
        'source-layer': 'EC_Gutter_Line',
        'layout': {
            'line-join': 'round',
            'line-cap': 'round'
        },
        'paint': {
          'line-width': {
              "stops": [[15, 2], [17, 4], [19, 6]]
          },
            'line-color': '#92140C'
        }
    });
    map.addLayer({
        'id': 'zoneAE',
        'type': 'line',
        'source': 'sbk-hydraulics',
        'source-layer': 'EC_Zone_AE',
        'layout': {
            'line-join': 'round',
            'line-cap': 'round'
        },
        'paint': {
          'line-width': {
              "stops": [[15, 2], [17, 4], [19, 6]]
          },
            'line-color': '#4056f4'
        }
    });
    map.addLayer({
        'id': 'floodway',
        'type': 'line',
        'source': 'sbk-hydraulics',
        'source-layer': 'EC_Conveyance_Zone',
        'layout': {
            'line-join': 'round',
            'line-cap': 'round'
        },
        'paint': {
          'line-width': {
              "stops": [[15, 2], [17, 4], [19, 6]]
          },
            'line-color': '#DDD92A'
        }
    });
    map.addLayer({
        'id': 'hhz',
        'type': 'fill',
        'source': 'sbk-hydraulics',
        'source-layer': 'EC_High_Hazard_Zone',
        'layout': {
        },
        'paint': {
            'fill-opacity': 0.75,
            'fill-color': '#dc0714',
            'fill-outline-color': '#b00510'
        }
    });
    map.addLayer({
        'id': 'flowpath',
        'type': 'line',
        'source': 'sbk-hydraulics',
        'source-layer': 'River_Stationing',
        'layout': {
            'line-join': 'round',
            'line-cap': 'round'
        },
        'paint': {
          'line-width': {
              "stops": [[15, 1.5], [17, 3], [19, 4.5]]
          },
            'line-color': '#150578'
        }
    });
    map.addLayer({
        'id': 'bfe',
        'type': 'line',
        'source': 'sbk-hydraulics',
        'source-layer': 'EC_BFE',
        'layout': {
            'line-join': 'round',
            'line-cap': 'round'
        },
        'paint': {
          'line-width': {
              "stops": [[15, 2], [17, 4], [19, 6]]
          },
            'line-color': '#333'
        }
    });

    map.addLayer({
        'id': 'bfeLabels',
        'type': 'symbol',
        'source': 'sbk-hydraulics',
        'source-layer': 'EC_BFE',
        'layout': {
          'symbol-placement': 'line',
          'text-field': '{Contour}',
          'text-font': ['DIN Offc Pro Light','Open Sans Light','Arial Unicode MS Regular'],
          'text-size': {
            "stops": [[15,12],[17,14],[19,16]]
          }
        },
        'paint': {
          'text-color': '#333',
          'text-halo-color': 'rgba(255,255,255,0.9)',
          'text-halo-width': 2,
          'text-halo-blur': 1
        }
    });
    map.addLayer({
        'id': 'xs',
        'type': 'line',
        'source': 'sbk-hydraulics',
        'source-layer': 'EC_Cross_Sections',
        'interactive': true,
        'layout': {
            'line-join': 'round',
            'line-cap': 'round'
        },
        'paint': {
          'line-width': {
              "stops": [[15, 2], [17, 4], [19, 6]]
          },
            'line-color': '#0f0'
        }
    });
    map.addLayer({
        'id': 'xsLabels',
        'type': 'symbol',
        'source': 'sbk-hydraulics',
        'source-layer': 'EC_Cross_Sections',
        'layout': {
          'symbol-placement': 'line',
          'text-field': '{ProfileM}',
          'text-font': ['DIN Offc Pro Light','Open Sans Light','Arial Unicode MS Regular'],
          'text-size': {
            "stops": [[15,12],[17,14],[19,16]]
          }
        },
        'paint': {
          'text-color': '#000',
          'text-halo-color': 'rgba(0,255,0,0.9)',
          'text-halo-width': 1,
          'text-halo-blur': 1
        }
    });

}); //end style load

function toggleLayer(id, id2, layer) {

        var visibility = map.getLayoutProperty(layer, 'visibility');

        if (visibility === 'visible') {
            map.setLayoutProperty(layer, 'visibility', 'none');
            document.getElementById(id).className = '';
            document.getElementById(id2).className = 'link depth-1';
        } else {
            document.getElementById(id).className = 'display';
            document.getElementById(id2).className = 'link depth-1 display';
            map.setLayoutProperty(layer, 'visibility', 'visible');
        }
    };

function toggleTwo(id, id2, layer, layer2) {

        var visibility = map.getLayoutProperty(layer, 'visibility');

        if (visibility === 'visible') {
            map.setLayoutProperty(layer, 'visibility', 'none');
            map.setLayoutProperty(layer2, 'visibility', 'none');
            document.getElementById(id).className = '';
            document.getElementById(id2).className = 'link depth-1';
        } else {
            document.getElementById(id).className = 'display';
            document.getElementById(id2).className = 'link depth-1 display';
            map.setLayoutProperty(layer, 'visibility', 'visible');
            map.setLayoutProperty(layer2, 'visibility', 'visible');
        }
    };

    function toggleThree(id, id2, layer, layer2, layer3) {

            var visibility = map.getLayoutProperty(layer, 'visibility');

            if (visibility === 'visible') {
                map.setLayoutProperty(layer, 'visibility', 'none');
                map.setLayoutProperty(layer2, 'visibility', 'none');
                map.setLayoutProperty(layer3, 'visibility', 'none');
                document.getElementById(id).className = '';
                document.getElementById(id2).className = 'link depth-1';
            } else {
                document.getElementById(id).className = 'display';
                document.getElementById(id2).className = 'link depth-1 display';
                map.setLayoutProperty(layer, 'visibility', 'visible');
                map.setLayoutProperty(layer2, 'visibility', 'visible');
                map.setLayoutProperty(layer3, 'visibility', 'visible');
            }
        };

function toggleSeven(id, id2, layer, layer2, layer3, layer4, layer5, layer6, layer7) {

        var visibility = map.getLayoutProperty(layer, 'visibility');

        if (visibility === 'visible') {
            map.setLayoutProperty(layer, 'visibility', 'none');
            map.setLayoutProperty(layer2, 'visibility', 'none');
            map.setLayoutProperty(layer3, 'visibility', 'none');
            map.setLayoutProperty(layer4, 'visibility', 'none');
            map.setLayoutProperty(layer5, 'visibility', 'none');
            map.setLayoutProperty(layer6, 'visibility', 'none');
            map.setLayoutProperty(layer7, 'visibility', 'none');
            document.getElementById(id).className = '';
            document.getElementById(id2).className = 'link depth-1';
        } else {
            document.getElementById(id).className = 'display';
            document.getElementById(id2).className = 'link depth-1 display';
            map.setLayoutProperty(layer, 'visibility', 'visible');
            map.setLayoutProperty(layer2, 'visibility', 'visible');
            map.setLayoutProperty(layer3, 'visibility', 'visible');
            map.setLayoutProperty(layer4, 'visibility', 'visible');
            map.setLayoutProperty(layer5, 'visibility', 'visible');
            map.setLayoutProperty(layer6, 'visibility', 'visible');
            map.setLayoutProperty(layer7, 'visibility', 'visible');
        }
    };

// When a click event occurs near a marker icon, open a popup at the location of
// the feature, with description HTML from its properties.
map.on('click', function (e) {
    map.featuresAt(e.point, {layer: ['xs'], radius: 5, includeGeometry: true}, function (err, features) {
      if (err) throw err;
      var feature = features[0];

        var tooltip = new mapboxgl.Popup()
            .setLngLat(e.lngLat)
            .setHTML('<h4>' + feature.properties.RiverCode + ' Cross Section ' + feature.properties.ProfileM + '</h4>' +
                     '10-year: ' + feature.properties.P003 + '<br />' +
                     '25-year: ' + feature.properties.P004 + '<br />' +
                     '50-year: ' + feature.properties.P005 + '<br />' +
                     '<b>Floodway: ' + feature.properties.P001 + '<br />' +
                     '100-year: ' + feature.properties.P002 + '</b><br />' +
                     '500-year: ' + feature.properties.P006 )
            .addTo(map);
    });
});

// Use the same approach as above to indicate that the symbols are clickable
// by changing the cursor style to 'pointer'.
map.on('mousemove', function (e) {
    map.featuresAt(e.point, {layer: ['xs'], radius: 5}, function (err, features) {
        map.getCanvas().style.cursor = (!err && features.length) ? 'pointer' : '';
    });
});

map.addControl(new mapboxgl.Geocoder());
map.addControl(new mapboxgl.Navigation({position: 'top-left'}));

// disable map rotation using right click + drag
map.dragRotate.disable();

// disable map rotation using touch rotation gesture
map.touchZoomRotate.disableRotation();

}
