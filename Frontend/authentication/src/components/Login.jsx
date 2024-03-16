import { Link } from "react-router-dom";
import useLogin from "../hooks/useLogin";
import { useRef } from "react";

const Login = () => {
  const email = useRef();
  const password = useRef();
  const { showPassword, handleShowPassword, handleLoginSubmit } = useLogin();

  return (
    <div className="bg-slate-700 w-full min-h-screen flex flex-col items-center justify-center p-5">
      <form
        onSubmit={(e) =>
          handleLoginSubmit(e, email.current.value, password.current.value)
        }
        className="flex flex-col px-3 py-4 gap-4  w-[450px]"
      >
        <label className="text-slate-200 font-bold text-2xl" htmlFor="">
          LOGIN
        </label>
        <input
          ref={email}
          className="bg-slate-900 px-3 py-4 text-slate-200 outline-none border-none rounded-lg placeholder:text-lg placeholder:text-slate-300"
          id="email"
          type="email"
          placeholder="Email"
          required
        />
        <div className="relative">
          <input
            ref={password}
            className="bg-slate-900 w-full px-3 py-4 text-slate-200 outline-none border-none rounded-lg placeholder:text-lg placeholder:text-slate-300"
            type={`${showPassword ? "text" : "password"}`}
            placeholder="Password"
            required
          />
          <label
            className="cursor-pointer text-slate-200 p-2 flex items-center gap-2 w-fit select-none"
            htmlFor="password"
          >
            <input
              onClick={handleShowPassword}
              className="w-5 h-5 cursor-pointer "
              id="password"
              type="checkbox"
            />
            Show password
          </label>
        </div>
        <p className="text-slate-200 underline cursor-pointer">
          forget password?
        </p>
        <div>
          <button className="w-full hover:bg-green-500 bg-green-600 px-2 py-2 rounded-lg text-xl font-bold text-slate-200">
            LOGIN
          </button>
        </div>
      </form>
      <Link to="/signup">
        <button className="text-slate-200 underline text-lg w-fit hover:text-slate-300">
          Sign up
        </button>
      </Link>
    </div>
  );
};

export default Login;
