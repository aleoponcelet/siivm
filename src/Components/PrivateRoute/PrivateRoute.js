// eslint-disable-next-line
import React, { useEffect, useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../App';
import { isLoggedIn } from '../Login/loginManager';

const PrivateRoute = ({ children, ...rest }) => {// eslint-disable-next-line
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        loggedInUser.email || isLoggedIn() ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
