import { motion } from "framer-motion";
function WelcomeSection() {
  return (
    <div className="w-full h-[80vh] flex justify-center font-oswald items-center pr-10 overflow-hidden sm:pr-2  ">
      <motion.div
        className=" w-2/3 flex justify-center items-center flex-col p-20 sm:p-1 sm:"
        initial={{ opacity: 0, translateX: -150 }}
        whileInView={{ opacity: 1, translateX: 0 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
      >
        <h1 className="text-8xl  text-yellow-100 sm:text-3xl">WELCOME</h1>
        <span className="text-center text-balance  text-2xl m-6 text-zinc-600 sm:m-2 sm:text-sm">
          "Welcome to Craving Kitchen - your culinary oasis! Explore a world of
          flavors where every dish is a delight. From savory sensations to sweet
          treats, indulge your cravings with us. Bon appétit!"
        </span>
        <span className="transition-spring text-lg animate-pulse cursor-pointer">
          <a href="#menu">Explore &rarr;</a>
        </span>
      </motion.div>
      <motion.div
        className="overflow-hidden rounded-2xl sm:w-2/4"
        initial={{ opacity: 0, translateX: 150 }}
        whileInView={{ opacity: 1, translateX: 0 }}
        transition={{ duration: 1 }}
      >
        <img
          src="Images/welcome.jpg"
          className="object-cover hover:scale-110 transition-transform ease duration-300"
        ></img>
      </motion.div>
    </div>
  );
}

export default WelcomeSection;
