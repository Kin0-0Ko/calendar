import axios, { AxiosResponse } from 'axios';
import { IUser } from '../models/user';

export default class UserServices {
	static async  getUsers(): Promise<AxiosResponse<IUser[]>>{
		return axios.get<IUser[]>('./users.json')
	}
}