
mapboxgl.accessToken = 'pk.eyJ1IjoiaWNvbmVuZyIsImEiOiJjaXBwc2V1ZnMwNGY3ZmptMzQ3ZmJ0ZXE1In0.mo_STWygoqFqRI-od05qFg';
if (!mapboxgl.supported()) {
    alert('Your browser does not support Mapbox GL');
} else {
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/iconeng/cikh67rk8004n9vkouhls14s4',
    zoom: 15.5,
    center: [-105.2533, 40.0449]
});

var layerList = document.getElementById('menu');
var inputs = layerList.getElementsByTagName('input');

function switchLayer(layer) {
    var layerId = layer.target.value;
    map.setStyle('mapbox://styles/iconeng/' + layerId);
    document.getElementById('contour').className = 'display';
    document.getElementById('contourMobile').className = 'link depth-1 display';
    document.getElementById('parcels').className = 'display';
    document.getElementById('parcelsMobile').className = 'link depth-1 display';
    document.getElementById('easements').className = 'display';
    document.getElementById('easementsMobile').className = 'link depth-1 display';
    document.getElementById('sanitary').className = '';
    document.getElementById('sanitaryMobile').className = 'link depth-1 ';
    document.getElementById('storm').className = '';
    document.getElementById('stormMobile').className = 'link depth-1 ';
    document.getElementById('hsc').className = '';
    document.getElementById('hscMobile').className = 'link depth-1';
    document.getElementById('lsc').className = '';
    document.getElementById('lscMobile').className = 'link depth-1';
    document.getElementById('nc').className = '';
    document.getElementById('ncMobile').className = 'link depth-1';
    document.getElementById('trees').className = '';
    document.getElementById('treesMobile').className = 'link depth-1';
    document.getElementById('historical').className = '';
    document.getElementById('historicalMobile').className = 'link depth-1';
}

for (var i = 0; i < inputs.length; i++) {
    inputs[i].onclick = switchLayer;
}

map.on('style.load', function () {

    map.addSource('PaloPark', {
        type: 'vector',
        url: 'mapbox://iconeng.7b273d20'
    });

    map.addSource('historical', {
        type: 'image',
        url: 'images/historical.jpg',
        coordinates: [
          [-105.31611345,40.0643320562],
          [-105.245127602,40.0643320562],
          [-105.245127602,40.0224325478],
          [-105.31611345,40.0224325478]
        ]
    });
    map.addLayer({
        'id': 'aerial',
        'type': 'raster',
        'source': 'historical',
        'layout': {
          'visibility': 'none'
        },
        'paint': {
          'raster-opacity': 0.85,
          'raster-hue-rotate': 90
        }
    },'road-label-sm');
// Parcels
    map.addLayer({
        'id': 'parcels',
        'type': 'line',
        'source': 'PaloPark',
        'source-layer': 'FCR_ParcelLines',
        'layout': {
          'line-join': 'round',
          'line-cap': 'round'
        },
        'paint': {
          'line-width': {
              "stops": [[15, 1.5], [17, 2], [19, 3]]
          },
          'line-opacity': {
              "stops": [[16, 0.9],[19, 1]]
          },
          'line-color': '#000'
        }
    },'road-label-sm');
    map.addLayer({
        'id': 'easements',
        'type': 'line',
        'source': 'PaloPark',
        'source-layer': 'FCR_EasementLines',
        'layout': {
          'line-join': 'round',
          'line-cap': 'round'
        },
        'paint': {
          'line-width': {
              "stops": [[15, 1.5], [17, 2], [19, 3]]
          },
          'line-opacity': {
              "stops": [[16, 0.9],[19, 1]]
          },
          'line-dasharray': [4,3],
          'line-color': '#000'
        }
    },'road-label-sm');

// Existing Contours
    map.addLayer({
        'id': 'majorContours',
        'type': 'line',
        'source': 'PaloPark',
        'source-layer': 'FCR_ExistingContoursMajor',
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
    },'road-label-sm');
    map.addLayer({
        'id': 'minorContours',
        'type': 'line',
        'source': 'PaloPark',
        'source-layer': 'FCR_ExistingContoursMinor',
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
    },'road-label-sm');
    map.addLayer({
        'id': 'majorLabels',
        'type': 'symbol',
        'source': 'PaloPark',
        'source-layer': 'FCR_ExistingContoursMajor',
        'layout': {
          'symbol-placement': 'line',
          'text-field': '{ELEVATION}',
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
// High Sediment Channel
    map.addLayer({
        'id': 'hscMajorContours',
        'type': 'line',
        'source': 'PaloPark',
        'source-layer': 'FCR_HSC_MajorContour',
        'layout': {
          'visibility': 'none',
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
          'line-color': 'crimson'
        }
    },'road-label-sm');
    map.addLayer({
        'id': 'hscMinorContours',
        'type': 'line',
        'source': 'PaloPark',
        'source-layer': 'FCR_HSC_MinorContour',
        'layout': {
          'visibility': 'none',
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
          'line-color': 'crimson'
        }
    },'road-label-sm');
    map.addLayer({
        'id': 'hscLabels',
        'type': 'symbol',
        'source': 'PaloPark',
        'source-layer': 'FCR_HSC_MajorContour',
        'layout': {
          'visibility': 'none',
          'symbol-placement': 'line',
          'text-font': ['DIN Offc Pro Light','Open Sans Light','Arial Unicode MS Regular'],
          'text-field': '{ELEVATION}',
          'text-size': {
            "stops": [[15,9],[17,12],[19,15]]
          }
        },
        'paint': {
          'text-color': 'crimson',
          'text-halo-color': 'rgba(255,255,255,0.9)',
          'text-halo-width': 2,
          'text-halo-blur': 0.5
        }
    });
//Low Sediment Channel
    map.addLayer({
        'id': 'lscMajorContours',
        'type': 'line',
        'source': 'PaloPark',
        'source-layer': 'FCR_LSC_MajorContours',
        'layout': {
          'visibility': 'none',
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
          'line-color': 'darkorchid'
        }
    },'road-label-sm');
    map.addLayer({
        'id': 'lscMinorContours',
        'type': 'line',
        'source': 'PaloPark',
        'source-layer': 'FCR_LSC_MinorContours',
        'layout': {
          'visibility': 'none',
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
          'line-color': 'darkorchid'
        }
    },'road-label-sm');
    map.addLayer({
        'id': 'lscLabels',
        'type': 'symbol',
        'source': 'PaloPark',
        'source-layer': 'FCR_LSC_MajorContours',
        'layout': {
          'visibility': 'none',
          'symbol-placement': 'line',
          'text-font': ['DIN Offc Pro Light','Open Sans Light','Arial Unicode MS Regular'],
          'text-field': '{ELEVATION}',
          'text-size': {
            "stops": [[15,9],[17,12],[19,15]]
          }
        },
        'paint': {
          'text-color': 'darkorchid',
          'text-halo-color': 'rgba(255,255,255,0.9)',
          'text-halo-width': 2,
          'text-halo-blur': 0.5
        }
    });
// Natural Channel
    map.addLayer({
        'id': 'ncMajorContours',
        'type': 'line',
        'source': 'PaloPark',
        'source-layer': 'FCR_NC_MajorContour',
        'layout': {
          'visibility': 'none',
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
          'line-color': 'lightseagreen'
        }
    },'road-label-sm');
    map.addLayer({
        'id': 'ncMinorContours',
        'type': 'line',
        'source': 'PaloPark',
        'source-layer': 'FCR_NC_MinorContour',
        'layout': {
          'visibility': 'none',
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
          'line-color': 'lightseagreen'
        }
    },'road-label-sm');
    map.addLayer({
        'id': 'ncLabels',
        'type': 'symbol',
        'source': 'PaloPark',
        'source-layer': 'FCR_NC_MajorContour',
        'layout': {
          'visibility': 'none',
          'symbol-placement': 'line',
          'text-font': ['DIN Offc Pro Light','Open Sans Light','Arial Unicode MS Regular'],
          'text-field': '{ELEVATION}',
          'text-size': {
            "stops": [[15,9],[17,12],[19,15]]
          }
        },
        'paint': {
          'text-color': 'lightseagreen',
          'text-halo-color': 'rgba(255,255,255,0.9)',
          'text-halo-width': 2,
          'text-halo-blur': 0.5
        }
    });
// Utilities
    map.addLayer({
        'id': 'sanitary',
        'type': 'line',
        'source': 'PaloPark',
        'source-layer': 'FCR_SanitarySewers',
        'layout': {
          'visibility': 'none',
            'line-join': 'round',
            'line-cap': 'round'
        },
        'paint': {
          'line-width': {
              "stops": [[15, 2], [17, 3], [19, 4]]
          },
          'line-opacity': {
              "stops": [[16, 0.9],[19, 1]]
          },
          'line-color': '#9acd32'
        }
    },'road-label-sm');
    map.addLayer({
        'id': 'storm',
        'type': 'line',
        'source': 'PaloPark',
        'source-layer': 'FCR_StormSewers',
        'layout': {
          'visibility': 'none',
            'line-join': 'round',
            'line-cap': 'round'
        },
        'paint': {
          'line-width': {
              "stops": [[15, 2], [17, 3], [19, 4]]
          },
          'line-opacity': {
              "stops": [[16, 0.9],[19, 1]]
          },
          'line-color': '#00bfff'
        }
    },'road-label-sm');
// Trees
    map.addLayer({
      'id': 'trees',
      'type': 'circle',
      'source': 'PaloPark',
      'source-layer': 'FCR_Trees',
      'layout': {
        'visibility': 'none',
      },
      'paint': {
        'circle-radius': {
          'stops': [[15,1],[19,2.5]]
        },
        'circle-color': 'mediumseagreen'

      }
    });
    map.addLayer({
      'id': 'trees1',
      'type': 'circle',
      'source': 'PaloPark',
      'source-layer': 'FCR_Trees',
      'filter': ["<",'Size',10],
      'layout': {
        'visibility': 'none',
      },
      'paint': {
        'circle-radius': {
          'base': 1.5,
          'stops': [[16,4],[22,25]]
        },
        'circle-opacity': 0.3,
        'circle-color': 'mediumseagreen'
      }
    });
    map.addLayer({
      'id': 'trees2',
      'type': 'circle',
      'source': 'PaloPark',
      'source-layer': 'FCR_Trees',
      'filter': ['all',['>=','Size',10],['<','Size',20]],
      'layout': {
        'visibility': 'none',
      },
      'paint': {
        'circle-radius': {
          'base': 1.5,
          'stops': [[16,4],[22,50]]
        },
        'circle-opacity': 0.3,
        'circle-color': 'mediumseagreen'
      }
    });
    map.addLayer({
      'id': 'trees3',
      'type': 'circle',
      'source': 'PaloPark',
      'source-layer': 'FCR_Trees',
      'filter': ['all',['>=','Size',20],['<','Size',30]],
      'layout': {
        'visibility': 'none',
      },
      'paint': {
        'circle-radius': {
          'base': 1.5,
          'stops': [[16,4],[22,75]]
        },
        'circle-opacity': 0.3,
        'circle-color': 'mediumseagreen'
      }
    });
    map.addLayer({
      'id': 'trees4',
      'type': 'circle',
      'source': 'PaloPark',
      'source-layer': 'FCR_Trees',
      'filter': ['all',['>=','Size',30],['<','Size',40]],
      'layout': {
        'visibility': 'none',
      },
      'paint': {
        'circle-radius': {
          'base': 1.5,
          'stops': [[16,4],[22,100]]
        },
        'circle-opacity': 0.3,
        'circle-color': 'mediumseagreen'
      }
    });
    map.addLayer({
      'id': 'trees5',
      'type': 'circle',
      'source': 'PaloPark',
      'source-layer': 'FCR_Trees',
      'filter': ['all',['>=','Size',40]],
      'layout': {
        'visibility': 'none',
      },
      'paint': {
        'circle-radius': {
          'base': 1.5,
          'stops': [[16,4],[22,150]]
        },
        'circle-opacity': 0.3,
        'circle-color': 'mediumseagreen'
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

function toggleSix(id, id2, layer, layer2, layer3, layer4, layer5, layer6, layer7) {

        var visibility = map.getLayoutProperty(layer, 'visibility');

        if (visibility === 'visible') {
            map.setLayoutProperty(layer, 'visibility', 'none');
            map.setLayoutProperty(layer2, 'visibility', 'none');
            map.setLayoutProperty(layer3, 'visibility', 'none');
            map.setLayoutProperty(layer4, 'visibility', 'none');
            map.setLayoutProperty(layer5, 'visibility', 'none');
            map.setLayoutProperty(layer6, 'visibility', 'none');
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
        }
    };

map.addControl(new mapboxgl.Geocoder());
map.addControl(new mapboxgl.Navigation({position: 'top-left'}));

}
