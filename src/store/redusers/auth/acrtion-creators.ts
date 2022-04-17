import axios from 'axios'
import { AppDispatch } from '../..'
import UserServices from '../../../api/UserServices'
import { IUser } from '../../../models/user'
import {SetUserAction, AuthActionsEnum, SetErroAction, SetIsLoadingAction, SetAuthAction} from './types'

export const AuthActionCreators =  {
	setUser: (user: IUser):SetUserAction => ({type: AuthActionsEnum.SET_USER, payload: user }),
	setError: (error: string):SetErroAction => ({type: AuthActionsEnum.SET_ERROR, payload: error }),
	setIsLoading: (isLoading: boolean):SetIsLoadingAction => ({type: AuthActionsEnum.SET_IS_LOADING, payload: isLoading }),
	setAuth: (isAuth: boolean):SetAuthAction => ({type: AuthActionsEnum.SET_AUTH, payload: isAuth }),
	login: (username: string, password: string) => async (dispatch: AppDispatch) => {
		try {
			dispatch(AuthActionCreators.setIsLoading(true))
			setTimeout( async () => {

				const res = await UserServices.getUsers()
				const mockUser = res.data.find(user => user.username === username && user.password === password)
				if(mockUser){
					localStorage.setItem('auth', 'true')
					localStorage.setItem('username', mockUser.username)
					dispatch(AuthActionCreators.setAuth(true))
					dispatch(AuthActionCreators.setUser(mockUser))
				}else{
					dispatch(AuthActionCreators.setError('User not found'))

				}
				dispatch(AuthActionCreators.setIsLoading(false))
			}, 1000)
			

		} catch (er) {
			dispatch(AuthActionCreators.setError('Log in error'))
			
		}
	},
	logout: () => async (dispatch: AppDispatch) => {
			localStorage.removeItem('auth')
			localStorage.removeItem('username')
			dispatch(AuthActionCreators.setUser({} as IUser))
			dispatch(AuthActionCreators.setAuth(false))
			
	}
}