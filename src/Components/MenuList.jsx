import menuData from "./../Data/MenuData.json";

function MenuList({ menuCategory }) {
  const items = menuCategory === "Browse All" ?
    menuData.categories.reduce((acc, cat) => acc.concat(cat.items), []) :
    menuData.categories.find(cat => cat.name === menuCategory)?.items || [];

  return (
    <div className="flex items-center justify-center h-full">
      <div className="w-[80%] max-h-[68vh] flex flex-wrap justify-center items-center font-playfair text-3xl text-center overflow-scroll">
        {items.map((item) => (
          <MenuItem key={item.name} item={item} />
        ))}
      </div>
    </div>
  );
}

function MenuItem({ item }) {
  return (
    <li className=" group list-none flex items-center justify-evenly  w-[25vw] flex-grow   h-40 bg-creme-100   hover:bg-yellow-100 transition-colors duration-300 ease border-b-4 border-dashed">
      <img
        src={`./Images/Drinks/${item.image}`}
        className="w-32 h-32 rounded-full object-cover mx-1"
        alt={item.name}
      />
      <div className="flex flex-col justify-center items-center w-72">
        {item.name}
        <span className="text-yellow-100 w-36 group-hover:text-white">
          &#8377;{item.price}/-
        </span>
      </div>
    </li>
  );
}
export default MenuList;
