import Special from "./Special";
import specialData from "./../Data/special.json";
function specialMenu() {
  return (
    <div className="bg-creme-100 w-full h-screen flex justify-center items-center flex-col ">
      <h1 className="flex justify-center relative p-2 text-7xl font-cursive2">
        Our Special
      </h1>
      <div className="bg-white w-3/4 h-3/4 flex flex-row flex-wrap ">
        {specialData.map((data, index) => (
          <Special key={index} index={index} data={data} />
        ))}
      </div>
    </div>
  );
}
export default specialMenu;
