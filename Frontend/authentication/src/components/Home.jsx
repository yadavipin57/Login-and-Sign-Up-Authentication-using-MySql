import useHome from "../hooks/useHome";

const Home = () => {
  const { userName, handleLogOut } = useHome();
  return (
    <div className="bg-slate-700 w-full min-h-screen">
      <div className="px-8 py-3 bg-slate-900 text-slate-200 flex items-center justify-between">
        <h1 className="text-xl">LOGO</h1>
        <div className="flex items-center gap-5">
          <p>{userName}</p>
          <button
            onClick={handleLogOut}
            className="bg-slate-300 text-slate-800 font-bold text-lg px-2 py-1 rounded-lg cursor-pointer hover:bg-slate-200"
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
