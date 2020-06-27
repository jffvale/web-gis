import { DateTime } from './datetime';

export interface SearchRequest {
    dateTime: DateTime;
    band: string;
    geojson: any;
}