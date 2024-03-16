import Cover from "./Components/Cover";
import Menu from "./Components/Menu";
import SpecialMenu from "./Components/specialMenu";
import MenuList from "./Components/MenuList";
import { useState } from "react";
// import './styles.css';
function App() {
  const [menuCategory, setMenuCategory] = useState(null);
  return (
    <>
      <Cover />
      <Welcome/>
      <SpecialMenu />
      <Menu setMenuCategory={setMenuCategory} menuCategory={menuCategory} />
      <MenuList menuCategory={menuCategory} />
    </>
  );
}
function Welcome() {
  return (
    <div className="w-full h-[80vh] flex justify-center font-oswald items-center pr-10 ">
      <div className=" w-2/3 flex justify-center items-center flex-col p-20">
        <h1 className="text-8xl  text-yellow-100">
          WELCOME
        </h1>
        <span className="text-center  text-2xl m-6 text-zinc-600">
        "Welcome to Craving Kitchen - your culinary oasis! Explore a world of flavors where every dish is a delight. From savory sensations to sweet treats, indulge your cravings with us. Bon appétit!"
        </span>
        <span className="transition-spring text-lg animate-pulse cursor-pointer">
          <a href="#menu">Explore &rarr;</a>
        </span>
      </div>
      <div className="overflow-hidden rounded-2xl">
        <img src="Images/welcome.jpg" className="object-cover hover:scale-110 transition-transform ease duration-300"></img>
      </div>
    </div>
  );
}

export default App;
