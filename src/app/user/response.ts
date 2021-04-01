import { User } from './user';

export interface ResponseAPI {
    success: boolean,
    total: number,
    users: User[] 
}
