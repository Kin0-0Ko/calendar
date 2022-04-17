import React, { FC } from 'react';
import { Routes, Route, Navigate  } from 'react-router-dom';
import Login from '../pages/Login';
import Event from '../pages/Event';
import { RouteNames } from '../routes';
import { useTypedSelector } from '../hooks/useTypedSelector';

const AppRouter: FC = () => {

	const {isAuth} = useTypedSelector(state => state.auth)

	return(
		isAuth ? 	
		<Routes>
			<Route path={RouteNames.EVENT} key={RouteNames.EVENT} element={<Event/>}/>
			<Route path='*' element ={<Navigate replace to={RouteNames.EVENT} />}/>
		</Routes>:
		<Routes>
			<Route path={RouteNames.LOGIN} key={RouteNames.LOGIN} element={<Login/>}/>
			<Route path='*' element ={<Navigate replace to={RouteNames.LOGIN} />}/>

		</Routes>
	);
}

export default AppRouter;