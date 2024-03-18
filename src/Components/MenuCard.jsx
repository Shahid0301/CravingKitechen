

function MenuCard({ data, handleClick, id, }) {
  return (
    
    <div
      className={ `group w-[21%] h-72  rounded-lg shadow-2xl flex items-center justify-center flex-col bg-creme-100 mb-20 ${id==="Browse All"?"":"hover:bg-yellow-100"} sm:w-full sm:flex-row sm:h-20 sm:mb-5 lg:w-[40%] lg:flex-row lg:h-36 lg:mb-10 lg:` }
      onClick={() => handleClick(id)} // Pass the id to the handleClick function
    >
      
      <img src={`./Images/${data.image}`} className="w-36 h-36 z-1 group-hover:scale-110 transition-all ease-in-out sm:h-10 sm:w-10 lg:w-20 lg:h-20" alt={data.title} />
      <span className="text-3xl font-playfair  p-2">{data.title}</span>
      {/* <span>(10 Items)</span> */}
      </div>
    
  );
}

export default MenuCard;

