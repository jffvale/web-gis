import { User } from './user';

export class StorageModel {
    user: User;

    setUser(user: User): void {
        this.user = user;
    }
}
