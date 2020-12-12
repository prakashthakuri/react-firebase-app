import React, { useState } from 'react';
import { useForm } from 'react-hook-form'; //Third party library
import { Link } from 'react-router-dom';

import {login} from '../firebase/auth'

function Login(props) {
  const { register, handleSubmit, reset } = useForm();

  const [isLoading, setLoading] = useState(false);

  const onSubmit = async data => {
    let user;
    setLoading(true);
    try {
      user = await login(data);
      reset();
    }catch(error){
      console.log(error);
    }

    if (user){
      props.history.push(`/profile/${user.uid}`)
    }else{
      setLoading(false);
    }
  }
  const formClassName = `ui form ${isLoading ? 'loading': ''}`;
  return (
    <div className="login-container">
      <div className="ui card login-card">
        <div className="content">
          <form className={formClassName} onSubmit={handleSubmit(onSubmit)}>
            <div className="two field">
                <div className="field"></div>

              <label>
                Email
                <input type="email" name="email" placeholder="Email"  ref={register}/>
              </label>
            </div>
            <div className="field">
              <label>
                Password
                <input type="password" name="password" placeholder="Password"  ref={register}/>
              </label>
            </div>
            <div className="field actions">
                <button className="ui primary button login" type="submit" >
                Log In
                </button>
                or
                <Link to='/signup'>Sign Up</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
