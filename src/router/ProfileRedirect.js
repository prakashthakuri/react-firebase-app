import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useSession } from "../firebase/UserProvider";

const ProfileRedirect = ({ component: Component, ...rest }) => { // component
  // component parameter is assigned with Component and rest of the other params are defined as '...rest'
  const { user } = useSession();
  // console.log({...rest})
  // console.log({Component})
  return (
    <Route
      {...rest}
      render={(props) =>
        !user ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname:  `/profile/${user.uid}`,
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

export default ProfileRedirect;
