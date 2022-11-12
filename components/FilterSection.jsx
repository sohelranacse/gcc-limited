import React from "react";

function FilterSection() {
  return (
    <div className="container mx-auto py-20 px-4">
      <form>
        <div className="relative z-0 mb-6 w-full group">
          <div className="my-14">
            <input
              type="text"
              name="floating_ext"
              id="floating_ext"
              className="block py-2.5 px-2 w-full text-3xl pear-focus:text-2xl font-medium text-gray-700 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_ext"
              className="font-medium absolute px-2 text-3xl text-gray-400  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
            >
              Search Keywords
            </label>
          </div>
          <div className="">
            <label className="text-black font-medium pl-2">Filter by:</label>
            <div className="grid md:grid-cols-5 grid-cols-1 gap-2 my-3 justify-between">
              <select className="border border-solid border-slate-400 rounded-sm py-3 px-6">
                <option value="">Featured topics</option>
                <option value="1">Topics 1</option>
              </select>
              <select className="border border-solid border-slate-400 rounded-sm py-3 px-6 ">
                <option value="">Type</option>
                <option value="1">Type 1</option>
              </select>
              <select className="border border-solid border-slate-400 rounded-sm py-3 px-6 ">
                <option value="">Category</option>
                <option value="1">Category 1</option>
              </select>
              <select className="border border-solid border-slate-400 rounded-sm py-3 px-6 ">
                <option value="">Trending topics</option>
                <option value="1">Trending Topics 1</option>
              </select>
              <select className="border border-solid border-slate-400 rounded-sm py-3 px-6 ">
                <option value="">More filters</option>
                <option value="1">Filters 1</option>
              </select>
            </div>
            <div className="flex flex-wrap justify-end my-6">
              <button className="rounded-sm border border-solid border-blue-400 bg-blue-400 px-14 py-3 text-slate-100 font-medium hover:bg-blue-600 hover:border-blue-600 ease-linear duration-75">
                Clear all filters
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default FilterSection;
