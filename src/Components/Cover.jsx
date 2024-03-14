import { useEffect, useState } from "react";

function Cover() {
  const [coverNum, setCoverNum] = useState(1);

  const switchImage = () => {
    setCoverNum((coverNum) => (coverNum === 2 ? 1 : coverNum + 1));
  };

  useEffect(() => {
    // Set interval to switch image every 5 seconds
    const interval = setInterval(switchImage, 3000);

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center items-center bg-creme-100 w-full h-screen">
      <div className="bg-creme-100 relative w-full h-full overflow-hidden z-0 blur-sm ease-in-out transition-">
        <img
          src={`./../public/Images/cover${coverNum}.jpg`}
          className="transition-opacity duration-1000 ease-in-out w-full h-screen"
          alt="Cover"
        />
      </div>
      <div className="w-full h-screen absolute bg-black/[0.5] z-10 bottom-"></div>
      {coverNum === 1 ? (
        <div className="z-10 absolute w-full h-screen flex items-center justify-center flex-col transition-opacity">
          <img
            src={`Images/logo${2}.png`}
            className="z-10  w-2/6 drop-shadow-sm w-[10vw]"
          ></img>
          <h1 className="font-cursive2  text-9xl text-yellow-100 bottom-10 z-10">
            Cravings Kitchen
          </h1>
        </div>
      ) : (
        <h1 className="absolute text-white  font-cursive2 text-7xl z-10">More Than Just A Meal,It's An Experience</h1>
      )}
    </div>
  );
}

export default Cover;
