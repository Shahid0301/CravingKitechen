function AboutUs() {
    return (
      <div
        id="About"
        className="bg-creme-100 w-full h-36 flex font-playfair justify-center items-center"
      >
        <div className="w-1/3 text-center px-5">
        <div className="flex flex-col">
            <span className="font-oswald text-3xl">Opening Hours</span>
            <span>Monday-Sunday</span>
            <span>10AM-10PM</span>
          </div>
        </div>
        <div className="w-1/3 text-center">
        
          <div>
            <h1 className="text-3xl font-oswald">Contact Info</h1>
            <span>
              Address: Chaat Wali Gali Sadar Bazar Agra
              <br />
              Phone: 8077994790,9997151438
            </span>
          </div>
        </div>
        <div className="w-1/3 text-center text-3xl font-oswald">
          <h1 className="">Social</h1>
          <div className="flex justify-evenly">
          <a><i class="fa-brands fa-instagram"></i></a>
          <a><i class="fa-brands fa-facebook"></i></a>
          <a><i class="fa-brands fa-x-twitter"></i></a>
          </div>
        </div>
      </div>
    );
}
export default AboutUs;