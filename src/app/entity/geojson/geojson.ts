import { Feature } from '../responses/feature';

import { FeatureGeojson } from './feature';

export interface Geojson {
    type: string;
    features: FeatureGeojson[];
}