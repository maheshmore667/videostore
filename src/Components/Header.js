import React from "react";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../Utils/Store/Slices/navSlice";

const Header = () => {
  const dispatch = useDispatch();
  const toggleSidebarAction = () =>{
    dispatch(toggleSidebar())
  }

  return (
    <div className="grid grid-cols-12 shadow-md shadow-slate-400">
      <div className="col-span-1 flex justify-center py-2">
        <img
          className="h-10 ml-5"
          alt="hampberger menu"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW9GPrJX62kvafWyRN5gU_FkGK0KyX7YnOew&usqp=CAU"
          onClick={toggleSidebarAction}
        />
        <img
          className="h-12 ml-2"
          alt="YouTube Logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG5zbHGtJwAd804VzuLc-MeW7kC4ROjXgdVA&usqp=CAU"
        />
      </div>
      <div className="col-span-10 flex justify-center py-2">
        <input className="w-1/2 border border-slate-300 rounded-l-full" type="text" />
        <button className="text-lg px-2 col-span-2 border border-slate-300 rounded-r-full">🔍</button>
      </div>

      <div className="col-span-1 py-2 flex justify-center">
        <img
          className="h-10"
          alt="UserIcon"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVkPP9v3ilNNwxQm_y5kccoVL1s-HX0TZbrA&usqp=CAU"
        />
      </div>
    </div>
  );
};

export default Header;
