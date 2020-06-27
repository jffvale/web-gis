import { GeometryGeojson } from './geometry';
import { PropertiesGeojson } from './properties';


export interface FeatureGeojson {
    type: string;
    properties: PropertiesGeojson;
    geometry: GeometryGeojson;
}