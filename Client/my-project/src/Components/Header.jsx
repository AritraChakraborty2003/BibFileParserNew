import { useState } from "react";
import SearchPage from "./SearchPage";
import SearchDBLP from "./SearchDBLP";
const Header = () => {
  const [color, setColor] = useState(0);

  return (
    <>
      <div>
        <h1 className="text-[5vmin] mt-6 font-bold text-center">
          Welcome to reasearch papers!
        </h1>
        <div className="flex  w-[100vw] justify-center items-center mt-8 gap-x-16 text-[3.6vmin]">
          <div className="flex flex-col mt-1">
            <p
              onClick={() => {
                setColor(0);
              }}
            >
              ACL Anthology
            </p>
            <div
              className={`w-24 h-[3.75px] ${
                color === 0 ? "bg-[#000000]" : "bg-[#fff]"
              }`}
              id={0}
            ></div>
          </div>
          <div className="flex flex-col mt-1">
            <p
              onClick={() => {
                setColor(1);
              }}
            >
              DBLP
            </p>

            <div
              className={`w-24 h-[3.75px] ${
                color === 1 ? "bg-[#000000]" : "bg-[#fff]"
              }`}
              id={1}
            ></div>
          </div>
        </div>
      </div>
      <div className="searchHolder">
        <>{color === 0 ? <SearchPage /> : <SearchDBLP />}</>
      </div>
    </>
  );
};

export default Header;
