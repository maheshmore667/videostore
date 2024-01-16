import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../Utils/Store/Slices/navSlice";
import {
  YOUTUBE_API_KEY,
  YOUTUBE_SEARCH_SUGGESTIONS,
} from "../Utils/Constants";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => getSearchSuggestionResults(), 500);
    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [searchText]);

  const toggleSidebarAction = () => {
    dispatch(toggleSidebar());
  };

  const getSearchSuggestionResults = async () => {
    try {
      const data = await fetch(
        `${YOUTUBE_SEARCH_SUGGESTIONS}${searchText}&type=video&key=${YOUTUBE_API_KEY}`
      );
      const response = await data?.json();
      setSearchResults(response);
    } catch (error) {
      console.log(error);
    }
  };

  const routeToWatch = (id) => {
    setSearchText("");
    navigate(`/watch?v=${id}`);
  };

  return (
    <div className="grid grid-cols-12 shadow-md shadow-slate-400">
      <div className="col-span-1 flex justify-center py-2">
        <img
          className="h-10 ml-5 cursor-pointer"
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
      <div className="col-span-10 flex flex-col justify-center py-2">
        <div className="col-span-12 flex justify-center">
          <input
            className="w-1/2 border px-5 border-slate-300 rounded-l-full"
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e?.target?.value)}
          />
          <button className="text-lg px-2 col-span-2 border border-slate-300 rounded-r-full">
            🔍
          </button>
        </div>
        <div className="absolute bg-slate-100 flex flex-col top-12 left-56">
          {searchResults?.items?.map(
            (result) =>
              searchText && (
                <div
                  className="w-full p-3 shadow-md"
                  key={result?.id?.videoId}
                  onClick={() => routeToWatch(result?.id?.videoId)}
                >
                  {result?.snippet?.title}
                </div>
              )
          )}
        </div>
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
