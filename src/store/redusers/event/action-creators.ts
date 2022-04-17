import axios from 'axios';
import { AppDispatch } from '../..';
import UserServices from '../../../api/UserServices';
import { IEvent } from '../../../models/IEvent';
import { IUser } from '../../../models/user';
import { EventActionEnum, SetEventAction, SetGuestAction } from './type';

export const EventActionCreators = {
	setGuests: (payload: IUser[]): SetGuestAction => ({type: EventActionEnum.SET_GUESTS, payload: payload}),
	setEvent: (payload: IEvent[]): SetEventAction => ({type: EventActionEnum.SET_EVENTS, payload: payload}),
	fetchGuests: () =>  async (dispatch: AppDispatch) => {
		try {
			const response = await UserServices.getUsers()
			dispatch(EventActionCreators.setGuests(response.data))
		} catch (er) {
			console.log(er)
		}
	}
}