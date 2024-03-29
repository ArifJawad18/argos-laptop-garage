import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { signIn } = useContext(AuthContext);
  const [loginError, setLoginError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (data) => {
    console.log(data);
    setLoginError("");
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;

        const currentUser = {
          email: user.email,
        };

        console.log(currentUser);

        //get jwt token
        fetch("/jwt", {
          method: "POST",
          headers: {
            "content type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);

            //local storage
            localStorage.setItem("token", data.token);
          });

        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
        setLoginError(error.message);
      });
  };

  const { ProviderLogin } = useContext(AuthContext);

  const googleProvider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    ProviderLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.error(error));
  };
  return (
    <div className="h-[500px] flex justify-center items-center" data-aos="zoom-in-left">
      <div className="form-control mt-6">
         
         <iframe className="h-96 w-96" src="https://embed.lottiefiles.com/animation/93385"></iframe>
            </div>
      <div className="w-96 p-7 shadow-2xl bg-base-100">
        <h2 className="text-blue-500 text-3xl font-bold text-center"> Login</h2>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>

            <input
              type="email"
              {...register("email", { required: "Email Address is Empty " })}
              className="input input-bordered input-primary w-full max-w-xs"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email?.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register("password", { required: "Password is Empty" })}
              className="input input-bordered input-primary  w-full max-w-xs"
            />
            {errors.password && (
              <p className="text-red-500">{errors.password?.message}</p>
            )}
          </div>
          <input
            className=" btn  w-full mt-5 px-8 py-3 font-semibold rounded-md bg-sky-600 text-gray-50"
            value="Login"
            type="submit"
          />
          <div>{loginError && <p>{}</p>}</div>
        </form>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
          <p className="px-3 text-sm text-gray-600">
            Login with social accounts
          </p>
          <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
        </div>
        <div className="flex justify-center space-x-4">
          <button
            onClick={handleGoogleSignIn}
            aria-label="Log in with Google"
            className="p-3 rounded-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-5 h-5 fill-current"
            >
              <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
            </svg>
          </button>
        </div>
        <p className=" text-center text-sm  text-gray-600">
          Don't have an account ?
          <Link className=" ml-2 text-blue-500" to="/signup">
            Sign up{" "}
          </Link>
        </p>
      </div>
     <div>
     
     </div>
    </div>
  );
};

export default Login;
