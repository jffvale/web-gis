(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map/map.component */ "./src/app/map/map.component.ts");



class AppComponent {
    constructor() {
        this.title = 'web-gis';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, consts: [[1, "app-map"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-map", 0);
    } }, directives: [_map_map_component__WEBPACK_IMPORTED_MODULE_1__["MapComponent"]], styles: [".app-map[_ngcontent-%COMP%] {\n    height: 100%;\n    width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwLW1hcCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./map/map.component */ "./src/app/map/map.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var primeng_inputswitch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/inputswitch */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-inputswitch.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-dropdown.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");










class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            primeng_inputswitch__WEBPACK_IMPORTED_MODULE_6__["InputSwitchModule"],
            primeng_dropdown__WEBPACK_IMPORTED_MODULE_7__["DropdownModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _map_map_component__WEBPACK_IMPORTED_MODULE_4__["MapComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        primeng_inputswitch__WEBPACK_IMPORTED_MODULE_6__["InputSwitchModule"],
        primeng_dropdown__WEBPACK_IMPORTED_MODULE_7__["DropdownModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _map_map_component__WEBPACK_IMPORTED_MODULE_4__["MapComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    primeng_inputswitch__WEBPACK_IMPORTED_MODULE_6__["InputSwitchModule"],
                    primeng_dropdown__WEBPACK_IMPORTED_MODULE_7__["DropdownModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/map/map.component.ts":
/*!**************************************!*\
  !*** ./src/app/map/map.component.ts ***!
  \**************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ol_Map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ol/Map.js */ "./node_modules/ol/Map.js");
/* harmony import */ var ol_View_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ol/View.js */ "./node_modules/ol/View.js");
/* harmony import */ var ol_source_TileWMS__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ol/source/TileWMS */ "./node_modules/ol/source/TileWMS.js");
/* harmony import */ var ol_layer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ol/layer.js */ "./node_modules/ol/layer.js");
/* harmony import */ var ol_source_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ol/source.js */ "./node_modules/ol/source.js");
/* harmony import */ var ol_control_FullScreen__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ol/control/FullScreen */ "./node_modules/ol/control/FullScreen.js");
/* harmony import */ var ol_interaction_DragRotateAndZoom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ol/interaction/DragRotateAndZoom */ "./node_modules/ol/interaction/DragRotateAndZoom.js");
/* harmony import */ var ol_interaction_DragAndDrop__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ol/interaction/DragAndDrop */ "./node_modules/ol/interaction/DragAndDrop.js");
/* harmony import */ var ol_control_MousePosition_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ol/control/MousePosition.js */ "./node_modules/ol/control/MousePosition.js");
/* harmony import */ var ol_control_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ol/control.js */ "./node_modules/ol/control.js");
/* harmony import */ var ol_coordinate_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ol/coordinate.js */ "./node_modules/ol/coordinate.js");
/* harmony import */ var ol_interaction_Draw_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ol/interaction/Draw.js */ "./node_modules/ol/interaction/Draw.js");
/* harmony import */ var primeng_inputswitch__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/inputswitch */ "./node_modules/primeng/__ivy_ngcc__/fesm2015/primeng-inputswitch.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");






// Funcões laterais do Mapa






// Criação de desenhos e polígonos




class MapComponent {
    constructor() {
        this.source = new ol_source_js__WEBPACK_IMPORTED_MODULE_5__["Vector"]({ wrapX: false });
        // Criando camadas
        this.vector = new ol_layer_js__WEBPACK_IMPORTED_MODULE_4__["Vector"]({
            source: this.source
        });
        this.raster = new ol_layer_js__WEBPACK_IMPORTED_MODULE_4__["Tile"]({
            source: new ol_source_js__WEBPACK_IMPORTED_MODULE_5__["OSM"]()
        });
        this.base = new ol_layer_js__WEBPACK_IMPORTED_MODULE_4__["Tile"]({
            preload: Infinity,
            visible: true,
            title: "osm",
            baseLayer: true,
            source: new ol_source_js__WEBPACK_IMPORTED_MODULE_5__["OSM"](),
            layer: 'osm',
        });
        this.layer = new ol_layer_js__WEBPACK_IMPORTED_MODULE_4__["Tile"]({
            title: 'terrama2_10:view10',
            visible: false,
            source: new ol_source_TileWMS__WEBPACK_IMPORTED_MODULE_3__["default"]({
                url: 'http://www.terrama2.dpi.inpe.br/chuva/geoserver/wms?',
                params: {
                    'LAYERS': 'terrama2_10:view10',
                    'VERSION': '1.1.1',
                    'FORMAT': 'image/png',
                    'EPSG': '4674',
                    'TILED': true,
                    'TIME': '1998-01-02'
                },
                preload: Infinity,
                projection: 'EPSG:4674',
                serverType: 'geoserver',
                name: 'terrama2_10:view10'
            })
        });
    }
    ngOnInit() {
        this.initilizeMap();
    }
    // Iniciar as configurações do mapa
    initilizeMap() {
        this.features = [this.base, this.layer];
        var view = new ol_View_js__WEBPACK_IMPORTED_MODULE_2__["default"]({
            center: [-6124801.2015823, -1780692.0106836],
            zoom: 4
        });
        var mousePositionControl = new ol_control_MousePosition_js__WEBPACK_IMPORTED_MODULE_9__["default"]({
            coordinateFormat: Object(ol_coordinate_js__WEBPACK_IMPORTED_MODULE_11__["createStringXY"])(4),
            projection: 'EPSG:4326',
            className: 'custom-mouse-position',
            target: document.getElementById('mouse-position'),
            undefinedHTML: '0.0000, 0.0000'
        });
        this.map = new ol_Map_js__WEBPACK_IMPORTED_MODULE_1__["default"]({
            controls: Object(ol_control_js__WEBPACK_IMPORTED_MODULE_10__["defaults"])().extend([mousePositionControl, new ol_control_FullScreen__WEBPACK_IMPORTED_MODULE_6__["default"](), new ol_interaction_DragRotateAndZoom__WEBPACK_IMPORTED_MODULE_7__["default"](), new ol_interaction_DragAndDrop__WEBPACK_IMPORTED_MODULE_8__["default"]()], new ol_control_js__WEBPACK_IMPORTED_MODULE_10__["ScaleLine"]({ units: 'degrees' })),
            layers: this.features,
            target: 'map',
            view: view
        });
        var camada = this.layer;
        this.map.on('singleclick', function (event) {
            document.getElementById('info').innerHTML = '';
            var viewResolution = view.getResolution();
            var viewProjection = view.getProjection();
            var url = camada.getSource().getFeatureInfoUrl(event.coordinate, viewResolution, viewProjection, "EPSG:4326", { 'INFO_FORMAT': 'text/javascript', 'propertyName': 'formal_en' });
            if (url) {
                document.getElementById('info').innerHTML = '<iframe id = "infoFrame" seamless src = "' + url + '"></iframe>';
            }
        });
        var mapAuxiliar = this.map;
        this.map.on('pointermove', function (event) {
            if (event.dragging) {
                return true;
            }
            var pixel = mapAuxiliar.getEventPixel(event.originalEvent);
            var hit = mapAuxiliar.forEachLayerAtPixel(pixel, function () {
                return true;
            });
            mapAuxiliar.getTargetElement().style.cursor = hit ? 'pointer' : '';
        });
    }
    addInteraction() {
        this.map.addLayer(this.raster);
        this.map.addLayer(this.vector);
        this.draw = new ol_interaction_Draw_js__WEBPACK_IMPORTED_MODULE_12__["default"]({
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
    drawFeature() {
        if (this.draw_bool) {
            this.addInteraction();
        }
        else {
            this.removeInteraction();
        }
    }
    cleanAll() {
        this.map.removeLayer(this.vector);
        this.map.removeLayer(this.raster);
        this.draw = null;
        this.source = new ol_source_js__WEBPACK_IMPORTED_MODULE_5__["Vector"]({ wrapX: false });
        this.vector = new ol_layer_js__WEBPACK_IMPORTED_MODULE_4__["Vector"]({
            source: this.source
        });
        this.raster = new ol_layer_js__WEBPACK_IMPORTED_MODULE_4__["Tile"]({
            source: new ol_source_js__WEBPACK_IMPORTED_MODULE_5__["OSM"]()
        });
    }
    setLayer() {
        this.layer.setVisible(this.visible);
    }
}
MapComponent.ɵfac = function MapComponent_Factory(t) { return new (t || MapComponent)(); };
MapComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MapComponent, selectors: [["app-map"]], decls: 27, vars: 2, consts: [[1, "container-fluid", "mapa"], ["id", "form"], ["type", "text", "placeholder", "Busca"], ["type", "button"], ["id", "mouse-position"], ["id", "seletor"], ["id", "separador"], [3, "ngModel", "ngModelChange", "click"], ["type", "button", 3, "click"], ["id", "info"], ["id", "map", 1, "map"]], template: function MapComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Buscar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Camadas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Camada de Estados Brasileiros");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p-inputSwitch", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MapComponent_Template_p_inputSwitch_ngModelChange_15_listener($event) { return ctx.visible = $event; })("click", function MapComponent_Template_p_inputSwitch_click_15_listener() { return ctx.setLayer(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Pol\u00EDgonos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p-inputSwitch", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MapComponent_Template_p_inputSwitch_ngModelChange_20_listener($event) { return ctx.draw_bool = $event; })("click", function MapComponent_Template_p_inputSwitch_click_20_listener() { return ctx.drawFeature(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapComponent_Template_button_click_22_listener() { return ctx.cleanAll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Limpar Formas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.visible);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.draw_bool);
    } }, directives: [primeng_inputswitch__WEBPACK_IMPORTED_MODULE_13__["InputSwitch"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgModel"]], styles: [".map[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 930px;\n}\n\nh4[_ngcontent-%COMP%] {\n    text-align: center;\n    font-family: 'Franklin Gothic Medium';\n    background-color: rgba(138, 138, 138, 0.7);\n}\n\n#separador[_ngcontent-%COMP%]{\n    padding: 30px;\n}\n\ntable[_ngcontent-%COMP%]{\n    text-align: left;\n    width: 250px;\n    height: 100px;\n}\n\ntable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{\n    width: 100;\n}\n\n#seletor[_ngcontent-%COMP%]{\n    z-index: 1;\n    position: absolute;\n    width: 330px;\n    height: 600px;\n    background-color: rgb(255, 255, 255,0.7);\n    margin: 150px 0 0 55px;\n}\n\ntable#seletor-table[_ngcontent-%COMP%]{\n    border: 1px;\n    width: 50px;\n    height: 60px;\n}\n\n#form[_ngcontent-%COMP%]{\n    z-index: 2;\n    position: absolute;\n    background-color: rgb(255, 255, 255,0.7);\n    padding: 10px;\n    margin: 20px 0 0 55px;\n}\n\n#form[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] {\n    padding: 5px;\n}\n\n#form[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]{\n    background-color: #fff;\n    border:  1px solid #555;\n}\n\n#pesquisa[_ngcontent-%COMP%] {\n    background-color: #888;\n    color: #fff;\n    font-weight:  bold;\n    border: 1px solid #655;\n}\n\n#menu[_ngcontent-%COMP%]{\n    position: absolute;\n    top: 50px;\n    right: 10px;\n    list-style-type: none;\n    border-radius: 4px;\n    border: 3px solid #333;\n    padding: 0;\n    background-color: #eee;\n}\n\n#menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\n    padding: 5px;\n}\n\n#menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{\n    cursor: pointer;\n    text-decoration: underline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFwL21hcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIscUNBQXFDO0lBQ3JDLDBDQUEwQztBQUM5Qzs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixhQUFhO0lBQ2Isd0NBQXdDO0lBQ3hDLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsd0NBQXdDO0lBQ3hDLGFBQWE7SUFDYixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsV0FBVztJQUNYLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLFVBQVU7SUFDVixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLDBCQUEwQjtBQUM5QiIsImZpbGUiOiJzcmMvYXBwL21hcC9tYXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXAge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogOTMwcHg7XG59XG5cbmg0IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1mYW1pbHk6ICdGcmFua2xpbiBHb3RoaWMgTWVkaXVtJztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEzOCwgMTM4LCAxMzgsIDAuNyk7XG59XG5cbiNzZXBhcmFkb3J7XG4gICAgcGFkZGluZzogMzBweDtcbn1cblxudGFibGV7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICB3aWR0aDogMjUwcHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbn1cblxudGFibGUgdGR7XG4gICAgd2lkdGg6IDEwMDtcbn1cblxuI3NlbGV0b3J7XG4gICAgei1pbmRleDogMTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDMzMHB4O1xuICAgIGhlaWdodDogNjAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUsMC43KTtcbiAgICBtYXJnaW46IDE1MHB4IDAgMCA1NXB4O1xufVxuXG50YWJsZSNzZWxldG9yLXRhYmxle1xuICAgIGJvcmRlcjogMXB4O1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNjBweDtcbn1cblxuI2Zvcm17XG4gICAgei1pbmRleDogMjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUsMC43KTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIG1hcmdpbjogMjBweCAwIDAgNTVweDtcbn1cblxuI2Zvcm0+ICoge1xuICAgIHBhZGRpbmc6IDVweDtcbn1cblxuI2Zvcm0gPiBpbnB1dHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJvcmRlcjogIDFweCBzb2xpZCAjNTU1O1xufVxuXG4jcGVzcXVpc2Ege1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM4ODg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC13ZWlnaHQ6ICBib2xkO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM2NTU7XG59XG5cbiNtZW51e1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwcHg7XG4gICAgcmlnaHQ6IDEwcHg7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjMzMzO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbn1cblxuI21lbnUgbGl7XG4gICAgcGFkZGluZzogNXB4O1xufVxuXG4jbWVudSBsaTpob3ZlcntcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-map',
                templateUrl: './map.component.html',
                styleUrls: ['./map.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/admin/Desktop/web-gis/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map