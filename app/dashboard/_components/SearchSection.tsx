import { Search } from "lucide-react";
import React from "react";

const SearchSection = ({onSearchInput}: any) => {



  return (
    <div className=" p-10  flex flex-col items-center text-white bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700  mx-6 md:mx-7 rounded-md">
      <h2 className=" text-3xl font-bold text-primary">Browse Templates</h2>
      <p className=" text-white">what you are looking to create today?</p>
      <div className=" w-full flex justify-between items-center"></div>
      <div className=" flex gap-2 items-center p-2 hover:border rounded-full bg-primary my-5 w-[50%]">
        <Search className=" text-orange-500" />
        <input
          type="text"
          placeholder="Search"
          className="bg-primary text-black w-full outline-none placeholder:text-orange-500"
          onChange={(e)=> onSearchInput(e.target.value)}
        />
      </div>
    </div>
  );
};

export default SearchSection;
