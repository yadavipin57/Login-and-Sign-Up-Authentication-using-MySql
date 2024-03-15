import { Link } from "react-router-dom";
import useLogin from "../hooks/useLogin";
import useSignUp from "../hooks/useSignUp";

const SignUp = () => {
  const { showPassword, handleShowPassword } = useLogin();
  const { handleSignUpData, handleSignUpSubmit } = useSignUp();

  return (
    <div className="bg-slate-700 w-full min-h-screen flex flex-col items-center justify-center p-5">
      <form
        onSubmit={handleSignUpSubmit}
        className="flex flex-col px-3 py-4 gap-4  w-[450px]"
      >
        <label className="text-slate-200 font-bold text-2xl" htmlFor="name">
          SIGN UP
        </label>
        <input
          className="bg-slate-900 px-3 py-4 text-slate-200 outline-none border-none rounded-lg placeholder:text-lg placeholder:text-slate-300"
          id="name"
          name="name"
          type="text"
          placeholder="Name"
          required
          onChange={handleSignUpData}
        />
        <input
          className="bg-slate-900 px-3 py-4 text-slate-200 outline-none border-none rounded-lg placeholder:text-lg placeholder:text-slate-300"
          id="email"
          type="email"
          name="email"
          placeholder="Email"
          required
          onChange={handleSignUpData}
        />
        <div className="relative">
          <input
            className="bg-slate-900 w-full px-3 py-4 text-slate-200 outline-none border-none rounded-lg placeholder:text-lg placeholder:text-slate-300"
            type={`${showPassword ? "text" : "password"}`}
            placeholder="Password"
            name="password"
            required
            onChange={handleSignUpData}
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
        <button className="w-full hover:bg-green-500 bg-green-600 px-2 py-2 rounded-lg text-xl font-bold text-slate-200">
          SIGN UP
        </button>
      </form>
      <Link to="/">
        <button className="text-slate-200 underline text-lg w-fit hover:text-slate-300">
          Log In
        </button>
      </Link>
    </div>
  );
};

export default SignUp;
