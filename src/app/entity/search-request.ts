import { DateTime } from './date-time';

export interface SearchRequest {
    dateTime: DateTime;
    band: string;
    geojson: any;
}