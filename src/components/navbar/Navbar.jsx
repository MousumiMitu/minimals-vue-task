import React, { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";

const Navbar = () => {
  const [stickyClass, setStickyClass] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
    return () => window.removeEventListener("scroll", stickNavbar);
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      // window height changed for the demo
      windowHeight > 120 ? setStickyClass("sticky-nav") : setStickyClass("");
    }
  };
  return (
    <nav
      className={`d-flex justify-content-between align-items-center ms-1 px-4 py-2 ${stickyClass}`}
    >
      <div className="">
        <BsSearch />
      </div>

      <div className="  d-flex align-items-center">
        <a
          href="/"
          className="navItems  d-flex align-items-center justify-content-center rounded-circle"
        >
          <img src="united-kingdom.png" alt="" className="w-50 " />
        </a>
        <a
          href="/"
          className="navItems  d-flex align-items-center justify-content-center rounded-circle"
        >
          <img src="notification.png" alt="" className="w-50 " />
        </a>
        <a
          href="/"
          className="navItems  d-flex align-items-center justify-content-center rounded-circle"
        >
          <img src="group.png" alt="" className="w-50 " />
        </a>
        <a
          href="/"
          className="navItems d-flex align-items-center justify-content-center ms-1 rounded-circle"
        >
          <img src="gear.png" alt="" className="w-50" />
        </a>
        <a
          href="/"
          className="navItems d-flex align-items-center justify-content-center ms-1 rounded-circle"
        >
          <img src="man.png" alt="" className="w-75" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
