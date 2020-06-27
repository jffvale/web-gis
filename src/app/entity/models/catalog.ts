import { Coordinate } from './coordinate';

export interface Catalog {
    id: number;
    name: string;
    description: string;
    band: string;
    dateTime: string;
    coordinates: Coordinate[];
    image: string;
}
