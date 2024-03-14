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
      <div>
        <Cover />
        <SpecialMenu />
      </div>
      <Menu setMenuCategory={setMenuCategory} menuCategory={menuCategory} />
      <MenuList menuCategory={ menuCategory } />
      
      
      
    </>
  );
}

export default App;
