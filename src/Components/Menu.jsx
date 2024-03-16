import menuData from "./../Data/menu.json";
import MenuCard from "./MenuCard";
import { motion,useInView ,useAnimation} from "framer-motion";
function Menu({ setMenuCategory, menuCategory }) {
  // const control = useAnimation();
  // const [ ref, inView ] = useInView();
  
  function handleClick(id) {
    console.log(id);
    if (id === menuCategory) setMenuCategory(null);
    else setMenuCategory(id);
    console.log(menuCategory);
  }

  return (
    <motion.div
      
      id="Menu"
      className="w-full flex justify-center items-center flex-col overflow-hidden "
      initial={ { opacity: 0, scale:0.9 } }
      whileInView={ { opacity: 1, scale: 1 } }
      viewport={{ once: true }}
      transition={ { duration: 1 } }
      
    >
      <h1 className="font-cursive2 p-3 text-7xl mt-2">Our Menu</h1>
      <div className="w-3/4 flex place-content-around gap-1 mt-6 mb-6">
        {menuData.map((data) => (
          <MenuCard
            key={data.title}
            id={data.title}
            data={data}
            handleClick={handleClick}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default Menu;
