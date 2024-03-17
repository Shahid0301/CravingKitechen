function Navbar() {
    const nav = ["Home", "Special", "Menu", "Gallery"]; // Corrected "Galary" to "Gallery"
    return (
      <div className="bg-white w-full h-14 font-playfair z-10  top-0 sticky flex justify-evenly items-center  ">
        <div>
          <img src="/Images/logo2.png" className=" w-12" alt="Logo"></img>
        </div>
        <div className="flex justify-evenly">
          <ul className="flex">
            {nav.map((el,i) => (
              <a key={el} href={`#${el}`}>
                <li className={ `px-8  border-b-white border-b-2 hover:border-yellow-100 sm:px-1` }>{el}</li>
              </a>
            ))}
          </ul>
        </div>
        <div>
          <a href="#About" className="bg-yellow-100 py-4 px-9 sm:px-2 sm:py-3">About Us</a>
        </div>
      </div>
    );
}
export default Navbar;