import { Component, OnInit } from '@angular/core';

import Map from 'ol/Map.js';
import View from 'ol/View.js';
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
import GeoJSON from 'ol/format/GeoJSON';
import Feature from 'ol/Feature';

// Integração com a API
import { Geojson } from '../entity/geojson/geojson';
import { Response } from '../entity/responses/response';
import { User } from '../entity/models/user';
import { ApiRestfulService } from '../services/api-restful-service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css','../base/base.component.css']
})
export class MapComponent implements OnInit {
  // Controle do Mapa
  date;
  public map;
  public features;
  public visible;
  public draw;
  public draw_bool;
  public coord;
  private geojson;
  private user:User;
  public source = new VectorSource({ wrapX: false });
  public results: any[] = []

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

  // Integração com a API
  constructor(private service: ApiRestfulService) { }

  ngOnInit(): void {
    this.initilizeMap();
  }

  // Iniciar as configurações do mapa
  initilizeMap(): void {
    this.features = [this.base];

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

  formatGeojson() {
    var geom = [];
    this.vector.getSource().forEachFeature(
      function(feature) {
        geom.push(new Feature(feature.getGeometry().clone().transform('EPSG:3857', 'EPSG:4326')));
      }
    );
    this.geojson = JSON.parse(
      new GeoJSON().writeFeatures(geom)
    );
  }

  login() {
    let usr = prompt("Username");
    let pw = prompt("Password");
    this.user = { username: usr, password: pw };
    this.service.login(this.user);
    console.log(this.user);
  }

  logout() {
    this.service.logout();
    this.user = null;
    console.log(this.user);
  }

  async search() {
    this.formatGeojson();
    try {
      this.results = [];
      let request: Geojson = {
        type: "FeatureCollection",
        features: [
          {
            type: "Feature",
            properties: {
              band: "VV",
              projection: "EPSG:4326",
              datetime: {
                start: "2010-01-01",
                end: "2018-12-31"
              }
            },
            geometry: this.geojson.features[0].geometry
          }
        ]
      };
      await this.service.postSearchRequest(request).toPromise().then(
        (data: Response) => {
          data.features.forEach(
            (feature: any) => {
              this.results.push(feature)
            }
          )
        }
      );
    } catch (error) {
      alert("É necessário login para esta operação");
    }
  }
}
