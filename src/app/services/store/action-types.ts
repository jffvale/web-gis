import { Action } from '@ngrx/store';
import { StorageModel } from '../../entity/models/storage-model';

export enum ActionTypes {
    Update = 'UPDATE',
    Clear = 'CLEAR'
}


export const Update = (storage: StorageModel) => {
    return <Action>{ type: ActionTypes.Update, payload: storage };
}

export const Clear = () => {
    return <Action>{ type: ActionTypes.Clear, payload: null };
}
