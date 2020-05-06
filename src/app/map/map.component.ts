import { Component, OnInit } from '@angular/core';

import Map from 'ol/Map.js';
import View from 'ol/View.js';
import TileWMS from 'ol/source/TileWMS';
import { Tile as TileLayer, Vector as VectorLayer } from 'ol/layer.js';
import {OSM, Vector as VectorSource} from 'ol/source.js'

// Funcões laterais do Mapa
import FullScreen from 'ol/control/FullScreen';
import DragRotateAndZoom from 'ol/interaction/DragRotateAndZoom';
import DragAndDrop from 'ol/interaction/DragAndDrop';
import MousePosition from 'ol/control/MousePosition.js';
import { defaults as defaultControls, ScaleLine } from 'ol/control.js';
import { createStringXY } from 'ol/coordinate.js';

// Criação de desenhos e polígonos
import Draw from 'ol/interaction/Draw.js';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  // Controle do Mapa
  public map;
  public features;
  public visible;
  public draw;
  public draw_bool;
  public coord;
  public source = new VectorSource({ wrapX: false });

  // Criando camadas
  public vector = new VectorLayer({
    source: this.source
  });
  public raster = new TileLayer({
    source: new OSM()
  });

  public base = new TileLayer({
    preload: Infinity,
    visible: true,
    title: "osm",
    baseLayer: true,
    source: new OSM(),
    layer: 'osm',
  });

  public layer = new TileLayer({
      title : 'terrama2_10:view10',
      visible: false,
      source: new TileWMS({
        url: 'http://www.terrama2.dpi.inpe.br/chuva/geoserver/wms?',
        params: {
          'LAYERS': 'terrama2_10:view10',
          'VERSION': '1.1.1',
          'FORMAT': 'image/png',
          'EPSG': '4674',
          'TILED': true,
          'TIME' : '1998-01-02'
        },
        preload: Infinity,
        projection: 'EPSG:4674',
        serverType: 'geoserver',
        name: 'terrama2_10:view10'
      })
  });

  constructor() { }

  ngOnInit(): void {
    this.initilizeMap();
  }

  // Iniciar as configurações do mapa
  initilizeMap(): void {
    this.features = [this.base, this.layer];

    var view = new View({
      center: [-6124801.2015823, -1780692.0106836],
      zoom: 4
    });

    var mousePositionControl = new MousePosition({
      coordinateFormat: createStringXY(4),
      projection: 'EPSG:4326', /** 3857 */
      className: 'custom-mouse-position',
      target: document.getElementById('mouse-position'),
      undefinedHTML: '0.0000, 0.0000'
    });

    this.map = new Map({
      controls: defaultControls().extend([mousePositionControl, new FullScreen(), new DragRotateAndZoom(), new DragAndDrop()], new ScaleLine({units: 'degrees'})),
      layers: this.features,
      target: 'map',
      view: view
    });

    var camada = this.layer;
    this.map.on('singleclick', function(event){
      document.getElementById('info').innerHTML = '';
      var viewResolution = view.getResolution();
      var viewProjection = view.getProjection();
      var url = camada.getSource().getFeatureInfoUrl(
        event.coordinate, viewResolution, viewProjection,
        "EPSG:4326",
        { 'INFO_FORMAT' : 'text/javascript', 'propertyName' : 'formal_en' }
      );
      if(url){
        document.getElementById('info').innerHTML = '<iframe id = "infoFrame" seamless src = "' + url + '"></iframe>';
      }
    });

    var mapAuxiliar = this.map;
    this.map.on('pointermove', function(event){
      if( event.dragging ){
        return true;
      }
      var pixel = mapAuxiliar.getEventPixel(event.originalEvent);
      var hit = mapAuxiliar.forEachLayerAtPixel(pixel, function(){
        return true;
      });
      mapAuxiliar.getTargetElement().style.cursor = hit ? 'pointer' : '';
    });
  }

  addInteraction() {
    this.map.addLayer(this.raster);
    this.map.addLayer(this.vector);
    this.draw = new Draw({
      source: this.source,
      type: "Polygon"
    });
    this.map.addInteraction(this.draw);
  }

  removeInteraction() {
    this.map.removeLayer(this.vector);
    this.map.removeLayer(this.raster);
    this.draw = null;
  }

  drawFeature () {
    if ( this.draw_bool ) {
      this.addInteraction();
    } else {
      this.removeInteraction();
    }
  }

  cleanAll () {
    this.map.removeLayer(this.vector);
    this.map.removeLayer(this.raster);
    this.draw = null;
    this.source = new VectorSource({ wrapX: false });
    this.vector = new VectorLayer({
      source: this.source
    });
    this.raster = new TileLayer({
      source: new OSM()
    });
  }

  setLayer (): void {
    this.layer.setVisible(this.visible);
  }
}
