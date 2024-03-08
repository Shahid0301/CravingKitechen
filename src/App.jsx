import Cover from "./Components/Cover";
// import './styles.css';
function App() {
  return (
    <div>
      <Cover />
      <Menu />
    </div>
  );
}
function Menu() {
  return (
    <div className="bg-gray-900 w-full h-screen flex justify-center items-center flex-col mt-1 ">
      <h1 className="flex text-yellow-100 justify-center relative p-10 text-5xl underline font-cursive2">
        Our Special
      </h1>
      <div className="bg-white w-3/4 h-3/4 flex flex-row flex-wrap ">
      {[1,2,3,4].map((_, index) => (
          <Dish key={index} index={index} />
        ))}
      </div>
    </div>
  );
}
function Dish({ index }) {
  const isFirstTwo = index < 2;
  return (
    //parent
    <div className={ `group w-1/2 h-1/2  flex  hover:text-white hover:bg-yellow-100 overflow-hidden ${!isFirstTwo?"flex-row-reverse":""} ` }>
      <div className="h-full w-1/2  transition-all ease-in-out overflow-hidden ">
      <img
        src="./../public/Images/special1.jpg"
        className="w-full h-full object-cover group-hover:scale-110 transition-all ease duration-1000"
        alt="Special dish"
      />
      </div>
      <div className="flex items-center justify-center flex-col w-1/2 space-y-5 hover:text-white ">
        <h1 className="font-playfair text-2xl font-bold text-gray-700 hover:text-white">Rajma Chawal combo</h1>
        <span className="font-playfair text-center p-1">
          Rajma chawal is a classic North Indian dish consisting of red kidney
          beans cooked in a spiced tomato gravy, served with steamed basmati
          rice.
        </span>
        {/* Child */}
        <h1 className="text-4xl text-yellow-100 group-hover:text-white ">&#8377;80/-</h1>
      </div>
    </div>
  );
}

export default App;
