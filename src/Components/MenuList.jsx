import menuData from "./../Data/MenuData.json";

function MenuList({ menuCategory }) {
  const items =
    menuCategory === "Browse All"
      ? menuData.categories.reduce((acc, cat) => acc.concat(cat.items), [])
      : menuData.categories.find((cat) => cat.name === menuCategory)?.items ||
        [];

  return (
    <div className="flex items-center justify-center h-full">
      <div className="w-[80%] max-h-[68vh] font-playfair text-3xl  overflow-scroll">
        {items.map((item) => (
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
          <span className="text-2xl text-zinc-400 capitalize">{item.ingredient}</span>
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
