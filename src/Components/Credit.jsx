function Credit() {
  return (
    <div className="bg-zinc-800 w-full h-12 text-xl text-white flex  justify-evenly sm:text-xs">
      <p className="w-1/2">&copy;Cravings Kitchen. All rights reserved.</p>
      <div className="flex sm:flex-col ">
        <p>Created by:Shahid Khan</p>
        <div>
          <a href="https://www.instagram.com/shahid_0301/" className="mx-2">
            <i class="fa-brands fa-instagram"></i>
          </a>
          <a href="https://github.com/Shahid0301" className="mx-2">
            <i class="fa-brands fa-github"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/shahid-khan-7a97051b8/"
            className="mx-2"
          >
            <i class="fa-brands fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Credit;
