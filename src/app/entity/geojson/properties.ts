import { DateTime } from './datetime';

export interface PropertiesGeojson {
    projection: string;
    band: string;
    datetime: DateTime;
}