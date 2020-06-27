import { Assets } from './asset';
import { Geometry } from './geometry';
import { Properties } from './properties';

export interface Features {
    id = number;
    asset = Assets[];
    bbox = [];
    collection = string;
    geometry = Geometry;
    properties = Properties;
    type = string;
}