import { ActionModel } from './action';
import { ActionTypes } from './action-types';
import { StorageModel } from '../../entity/models/storage-model';

const store = new StorageModel();

export function storage_data(state = store, action: ActionModel) {
    switch (action.type) {
        case ActionTypes.Update: {
            state = action.payload
            return state;
        };
        case ActionTypes.Clear:{
            state = new StorageModel();
            return state;
        };
        default: return state;
    }
}