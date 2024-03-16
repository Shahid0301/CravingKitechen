import { useState } from "react";
import menuData from "./../Data/MenuData.json";

function MenuList({ menuCategory }) {
  const [search, setSearch] = useState("");
  const items =
    menuCategory === "Browse All"
      ? menuData.categories.reduce((acc, cat) => acc.concat(cat.items), [])
      : menuData.categories.find((cat) => cat.name === menuCategory)?.items ||
        [];
  const searchedData = items.filter((el) =>
    el.name.toLowerCase().includes(search.toLowerCase())
  );
  let length = searchedData.length;
  function handleSearch(e) {
    
    setSearch(e.target.value);
    if (e.key === "Enter") {
      e.target.value = "";
    }
  }

  return (
    <div className="flex items-center justify-center h-full flex-col">
      <div className="flex items-end mr-72 flex-col w-full  mb-10">
        { menuCategory && <input
          value={ search }
          type="text"
          placeholder="Search Item..."
          className="float border-2  w-1/4 right-0 px-10 py-3 rounded-md"
          onChange={ handleSearch }
          onKeyDown={ handleSearch }
        ></input> }
        {search && <span>
          found { length } items
        </span> }
      </div>
      <div className="w-[80%] max-h-[68vh] font-playfair text-3xl  overflow-scroll">
        {searchedData.map((item) => (
          <MenuItem key={item.name} item={item} />
        ))}
      </div>
    </div>
  );
}

function MenuItem({ item }) {
  return (
    <li className=" group list-none w-full max-h-40 mb-4 font-oswald px-7  hover:text-yellow-100 transition-colors duration-300 ease capitalize">
      <div className="flex justify-between text-4xl  ">
        <span className=" text-wrap">
          {item.name}
          <br />
          <span className="text-2xl text-zinc-400 capitalize">
            {item.ingredient}
          </span>
        </span>
        <span className=" text-zinc-400 ">
          ------------------
          <span className="text-black">&#8377;{item.price}/-</span>
        </span>
      </div>
    </li>
  );
}
export default MenuList;
