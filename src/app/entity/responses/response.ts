import { Feature } from './feature'

export interface Response {
    features: Feature[];
    numberMatched: number;
    numberReturned: number;
    type: number;
}