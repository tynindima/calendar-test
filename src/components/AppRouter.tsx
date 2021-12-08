import React, { FC } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { privateRoutes, publicRoutes, RouteNames } from '../routes';

const AppRouter: FC = () => {
  const { isAuth } = useTypedSelector(state => state.auth);

  return (
    isAuth
    ?
    <Routes>
      {privateRoutes.map((route) => 
        <Route
          key={route.path}
          path={route.path}
          caseSensitive={route.exact}
          element={<route.component/>}
        />
      )}
      <Route
        path="*"
        element={<Navigate replace to={RouteNames.EVENT} />} 
      />
    </Routes>
    :
    <Routes>
      {publicRoutes.map((route) => 
        <Route
          key={route.path}
          path={route.path}
          caseSensitive={route.exact}
          element={<route.component/>} 
        />
      )}
       <Route 
        path="*" 
        element={<Navigate replace to={RouteNames.LOGIN} />} 
       />
    </Routes>
  )
}

export default AppRouter;
