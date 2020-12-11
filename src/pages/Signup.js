import React, { useState } from "react";
import { useForm } from "react-hook-form"; // third-party library for form
import { signup } from "../firebase/auth";

function Signup() {
  const { register, handleSubmit, reset } = useForm(); //useForm is a function of react-hook-form and register, handleSubmit and reset are the fuction insie of useForm() function
  
  const [isLoading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      await signup(data);
      reset();
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };
  const formClassName = `ui from ${isLoading ? "loading" : ""}`;
  return (
    <div className="login-container">
      <div className="ui card login-card">
        <div className="content">
          <form className={formClassName} onSubmit={handleSubmit(onSubmit)}>
            <div className="two fields">
              <div className="field">
                <label>
                  First Name
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    ref={register}
                  />
                </label>
              </div>
              <div className="field">
                <label>
                  Last Name
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    ref={register}
                  />
                </label>
              </div>
            </div>
            <div className="field">
              <label>
                Email
                <input type="email" name="email" placeholder="Email" ref={register} />
              </label>
            </div>
            <div className="field">
              <label>
                Password
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  ref={register}
                />
              </label>
            </div>
            <button className="ui primary button login" type="submit">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
