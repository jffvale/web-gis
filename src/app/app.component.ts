import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Map from 'ol/Map.js';
import View from 'ol/View.js';
import OSM from 'ol/source/OSM';
import TileWMS from 'ol/source/TileWMS';
import TileLayer from   'ol/layer/Tile.js';
import { defaults as defaultControls } from 'ol/control.js';

@Component({ 
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'web-gis';


  constructor(private modalService: NgbModal){}

  openBackDropCustomClass(content) {
    this.modalService.open(content, { 
      centered: false,
      backdrop:false,
      });
      }

      // this.osm = new TileLayer({
      //   preload: Infinity,
      //   visible: true,
      //   title: "osm",
      //   baseLayer: true,
      //   source: new OSM(),
      //   layer:  osm,
      // });

      // var view = new View({
      //   center: [-6124801.2015023, -1780692.0106836],
      //   zoom: 4
      // });
      
      // this.map = new Map({
      //       controls: defaultControls(),
      //       layers: this.osm,
      //       target: 'map',
      //       view: view
      // });
     


}
