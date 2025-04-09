import React from "react";

const Login = () => {
  return (
    <section>
      <div className="p-5">
        <div className="w-100 shadow-lg/20 m-auto">
          <div className="flex items-center">
            <h2 className="w-2/4 text-center py-4 border-b-3 border-orange-500 font-bold text-xl">
              Login
            </h2>
            <h2 className="w-2/4 text-center py-4 font-bold text-xl">Signup</h2>
          </div>

          <div className="login-box">
            <form action="">
              <div className="email">
                <label htmlFor="">Email Address</label>
                <input type="email" />
              </div>
              <div className="password">
                <div className="title">
                    <span>Password</span>
                    
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
