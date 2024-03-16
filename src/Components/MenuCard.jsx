

function MenuCard({ data, handleClick, id, }) {
  return (
    <div
      className={ `group w-[21%] h-72  rounded-lg shadow-2xl flex items-center justify-center flex-col bg-creme-100 mb-20 ${id==="Browse All"?"":"hover:bg-yellow-100"}` }
      onClick={() => handleClick(id)} // Pass the id to the handleClick function
    >
      <img src={`./Images/${data.image}`} className="w-36 h-36 z-1 group-hover:scale-110 transition-all ease-in-out" alt={data.title} />
      <span className="text-3xl font-playfair  p-2">{data.title}</span>
      {/* <span>(10 Items)</span> */}
    </div>
  );
}

export default MenuCard;

