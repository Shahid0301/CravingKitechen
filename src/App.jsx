import Cover from "./Components/Cover";
import Menu from "./Components/Menu";
import SpecialMenu from "./Components/specialMenu";
import MenuList from "./Components/MenuList";
import { useState } from "react";
import WelcomeSection from "./Components/WelcomeSection";
import Navbar from "./Components/Navbar";
import AboutUs from "./Components/AboutUs";

// import './styles.css';
function App() {
  const [menuCategory, setMenuCategory] = useState("Browse All");
  return (
    <>
      <Cover />
      <Navbar />
      <WelcomeSection />
      <SpecialMenu />
      <Menu setMenuCategory={setMenuCategory} menuCategory={menuCategory} />
      <MenuList menuCategory={menuCategory} />
      <AboutUs />
    </>
  );
}


export default App;
