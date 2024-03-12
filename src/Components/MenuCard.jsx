import React from 'react'

function MenuCard({data}) {
  return (
    <div className="group w-[23%] h-72  rounded-lg shadow-2xl flex items-center justify-center flex-col bg-creme-100 ">
              {/* <div className=" rounded-full z-0 w-40 h-40  absolute transition-colors duration-100 ease-in-out delay-100"></div> */}
              <img src={`./Images/${data.image}`} className="w-36 h-36 z-10 group-hover:scale-110 transition-all ease-in-out duration-2000"></img>
          <span className="text-3xl font-playfair z-10 p-2 ">{ data.title}</span>
              <span>(10 Items)</span>
            </div>
  )
}

export default MenuCard;