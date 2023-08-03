import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { BiSolidTachometer } from "react-icons/bi";

const SideBar = () => {
  const [collapse, setCollapse] = useState(true);
  const [active, setActive] = useState(3);

  const data = [
    { id: 1, icon: <BiSolidTachometer />, name: "app" },
    { id: 2, icon: <BiSolidTachometer />, name: "e-commerce" },
    { id: 3, icon: <BiSolidTachometer />, name: "analytics" },
    { id: 4, icon: <BiSolidTachometer />, name: "banking" },
    { id: 5, icon: <BiSolidTachometer />, name: "file" },
  ];
  return (
    <div
      style={collapse ? { width: "25vw" } : { width: "7vw" }}
      className=" position-sticky top-0 start-0 vh-100   border-style"
    >
      <div
        className="collapsible-btn position-absolute d-flex justify-content-center align-items-center rounded-circle"
        onClick={() => setCollapse(!collapse)}
      >
        <IoIosArrowForward />
      </div>
      <div
        className={
          collapse
            ? "sidebar-container  w-100 p-4"
            : "sidebar-container  w-100 px-1 py-4"
        }
      >
        <div className={collapse ? "logo-btn mb-4" : "logo-btn mx-auto mb-2"}>
          <img src="letter-m.png" alt="" className="w-100 " />
        </div>
        <div>
          {collapse && <h6 className="fs-6 pb-2">Overview</h6>}
          {data.map((item) => (
            <div
              className={` ${
                collapse
                  ? "d-flex m-1  p-2 rounded sidebar-navItem"
                  : "d-flex flex-column justify-content-center align-items-center text-center m-1  p-1 rounded"
              } 
                  ${active === item.id && "active-color"}
                 `}
              onClick={() => setActive(item.id)}
              key={item.id}
            >
              <div className={collapse && "pe-3"}>{item.icon}</div>
              <h6
                className="my-auto "
                style={collapse ? { fontSize: "15px" } : { fontSize: "10px" }}
              >
                {item.name}
              </h6>
            </div>
          ))}
        </div>

        <div>
          {collapse && <h6 className="fs-6 pb-2">Overview</h6>}
          {data.map((item) => (
            <div
              className={` ${
                collapse
                  ? "d-flex m-1  p-2 rounded sidebar-navItem"
                  : "d-flex flex-column justify-content-center align-items-center text-center m-1  p-1 rounded"
              } 
                  ${active === item.id && "active-color"}
                 `}
              onClick={() => setActive(item.id)}
              key={item.id}
            >
              <div className={collapse && "pe-3"}>{item.icon}</div>
              <h6
                className="my-auto "
                style={collapse ? { fontSize: "15px" } : { fontSize: "10px" }}
              >
                {item.name}
              </h6>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
