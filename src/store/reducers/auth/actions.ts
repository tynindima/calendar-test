import { AddDispatch } from './../../index';
import { AuthActionEnum, SetUserAction, SetAuthAction, SetIsLoadingAction, SetErrorAction } from './types';
import { IUser } from './../../../models/IUser';
import UserService from '../../../api/UserService';


export const AuthActionCreators = {
  setUser: (user: IUser): SetUserAction => ({ type: AuthActionEnum.SET_USER, payload: user }),
  setIsAuth: (auth: boolean): SetAuthAction => ({ type: AuthActionEnum.SET_AUTH, payload: auth }),
  setIsLoading: (payload: boolean): SetIsLoadingAction => ({ type: AuthActionEnum.SET_IS_LOADING, payload }),
  setError: (payload: string): SetErrorAction  => ({ type: AuthActionEnum.SET_ERROR, payload }),
  login: (username: string, password: string) => async (dispatch: AddDispatch) => {
    try {
      dispatch(AuthActionCreators.setIsLoading(true));
      setTimeout(async() => {
        const response = await UserService.getUsers();
        const mockUser = response.data.find((user) => user.username === username && user.password === password);
        if (mockUser) {
          localStorage.setItem('auth', 'true');
          localStorage.setItem('username', mockUser.username);
          dispatch(AuthActionCreators.setIsAuth(true));
          dispatch(AuthActionCreators.setUser(mockUser));
          dispatch(AuthActionCreators.setError(''));

        } else {
          dispatch(AuthActionCreators.setError('Uncorrect username or password!'));
        }
        dispatch(AuthActionCreators.setIsLoading(false));
      }, 1000);
    } catch (error) {
      dispatch(AuthActionCreators.setError('Error while login'));
    }
  },
  logout: () => async (dispatch: AddDispatch) => {
    localStorage.removeItem('auth');
    localStorage.removeItem('username');
    dispatch(AuthActionCreators.setUser({} as IUser));
    dispatch(AuthActionCreators.setIsAuth(false));
  },
};
