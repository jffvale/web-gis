import { Catalog } from './catalog';

export interface Coordinate {
    id: number;
    projection: string;
    latitude: number;
    longitude: number;
    catalog: Catalog;
}