import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Cover() {
  const [coverNum, setCoverNum] = useState(1);

  const switchImage = () => {
    setCoverNum((coverNum) => (coverNum === 2 ? 1 : coverNum + 1));
  };

  useEffect(() => {
    // Set interval to switch image every 5 seconds
    const interval = setInterval(switchImage, 5000);

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      id="Home"
      className="flex justify-center overflow-hidden items-center bg-creme-100 w-full h-screen sm:h-[70%] sm:overflow-hidden "
    >
      <div className="bg-creme-100 relative w-full h-full overflow-hidden z-0 blur-sm ease-in-out transition-opacity duration-3000 sm:w-full sm:h-[70%] ">
        <img
          src={`./Images/Cover${coverNum}.jpg`}
          className="transition-opacity duration-1000 ease-in-out w-full h-screen sm:h-[70%]"
          alt="Cover"
        />
      </div>
      <div className="w-full h-screen absolute bg-black/[0.6] z-1 sm:h-[80%] xs:h-[50%] "></div>
      {coverNum === 1 ? (
        <div className=" absolute h-screen flex items-center justify-center flex-col transition-opacity">
          <motion.h2 className="font-cursive2 text-7xl text-white sm:text-4xl">
            Welcome TO
          </motion.h2>
          <motion.h1
            className="font-cursive2 text-9xl text-white z-10 sm:text-6xl "
            initial={{ opacity: 0, translateX: -150 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 2 }}
          >
            Cravings Kitchen
          </motion.h1>
        </div>
      ) : (
        <motion.h1
          className="absolute text-white font-cursive2 text-8xl text-center text-wrap z-10 sm:text-5xl w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3 }}
        >
          More Than Just A Meal,It's An Experience
        </motion.h1>
      )}
      <Button key={coverNum} position={"absolute"}>
        LOOK MENU
      </Button>
    </div>
  );
}

function Button({ position, children }) {
  // Change Children to children
  return (
    <motion.a
      href="#Menu"
      className={`${position} bg-white px-10 py-2  text-center bottom-36 text-black rounded-lg hover:bg-transparent hover:text-white border-2 border-white transition-color duration-100 sm:bottom-56 sm:px-3 sm:py-1 xs:bottom-72`}
      initial={{ opacity: 0, translateY: 100 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 2, delay: 1 }}
    >
      {children}
    </motion.a>
  );
}

export default Cover;
