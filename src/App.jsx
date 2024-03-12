import Cover from "./Components/Cover";
import Menu from "./Components/Menu";
import SpecialMenu from "./Components/specialMenu";

// import './styles.css';
function App() {
  return (
    <>
      <div>
        <Cover />
        <SpecialMenu />
      </div>
      <Menu />
      <MenuList/>
    </>
  );
}
function MenuList() {
  return (
    <div className="w-full h-80 bg-creme-100 flex  items-center flex-wrap font-playfair text-4xl ">
      <li className="list-none w-1/3 h-5 flex items-center justify-center ">
        Mojito 40/-
      </li>
      <li className="list-none w-1/3 h-5 flex items-start justify-center">
        Mojito
      </li>
      <li className="list-none w-1/3 h-5 flex items-start justify-center">
        Mojito
      </li>
      <li className="list-none w-1/3 h-5 flex items-start justify-center">
        Mojito
      </li>
    </div>
  );
}

export default App;
