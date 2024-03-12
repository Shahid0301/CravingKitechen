function Special({ index, data }) {
  const isFirstTwo = index < 2;
  return (
    //parent
    <div
      className={`group w-1/2 h-1/2  flex hover:text-white hover:bg-yellow-100 overflow-hidden ${
        !isFirstTwo ? "flex-row-reverse" : ""
      } `}
    >
      <div className="h-full w-1/2  transition-all ease-in-out overflow-hidden ">
        <img
          src={`./../public/Images/special${index + 1}.jpg`}
          className="w-full h-full object-cover group-hover:scale-110 transition-all ease duration-1000"
          alt="Special dish"
        />
      </div>
      <div className="flex items-center justify-center flex-col w-1/2 space-y-5 hover:text-white p-3">
        <h1 className="font-playfair text-2xl font-bold text-gray-700 hover:text-white">
          {data.title}
        </h1>
        <span className="font-playfair text-center p-1">
          {data.description}
        </span>
        {/* Child */}
        <h1 className="text-4xl text-yellow-100 group-hover:text-white ">
          &#8377;{data.price}/-
        </h1>
      </div>
    </div>
  );
}
export default Special;
