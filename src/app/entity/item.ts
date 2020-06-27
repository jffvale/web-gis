import { Features } from './feature';

export interface Item{
    features = Features[];
    numberMatched = number;
    numberReturned = number;
    type = string;
}