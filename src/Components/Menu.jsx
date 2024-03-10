import menuData from "./../Data/menu.json";
import MenuCard from "./MenuCard";

function Menu() {
  return (
    <div className="w-full flex justify-center items-center flex-col">
      <h1 className="font-cursive2 p-3 text-7xl mt-2">Our Menu</h1>
      <div className="w-3/4 flex place-content-around gap-1 mt-6 mb-6">
        {menuData.map((data, i) => (
          <MenuCard key={i} data={data} />
        ))}
      </div>
    </div>
  );
}

export default Menu;
