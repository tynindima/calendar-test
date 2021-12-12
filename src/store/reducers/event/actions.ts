import { AddDispatch } from './../../index';
import { IEvent } from './../../../models/IEvent';
import { IUser } from './../../../models/IUser';
import { EventActionEnum, SetGuestsAction, SetEventsAction } from './types';
import UserService from '../../../api/UserService';


export const EventActionCreators = {
  setGuests: (payload: IUser[]): SetGuestsAction => ({ type: EventActionEnum.SET_GUESTS, payload }),
  setEvents: (payload: IEvent[]): SetEventsAction => ({ type: EventActionEnum.SET_EVENTS, payload }),
  fetchGuests: () => async (dispatch: AddDispatch) => {
    try {
      const response = await UserService.getUsers();
      dispatch(EventActionCreators.setGuests(response.data));
    } catch (error) {
      console.log(error);
    }
  },
};