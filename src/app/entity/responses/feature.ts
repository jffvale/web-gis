import { Asset } from './asset';
import { Geometry } from './geometry';
import { Properties } from './properties';

export interface Feature {
    id: number;
    asset: Asset[];
    bbox: number[];
    collection: string;
    geometry: Geometry;
    properties: Properties;
    type: string;
}