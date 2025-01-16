import { useParams } from "react-router-dom";
import axios from "axios";
import Card from "./Card";
import { useEffect, useState } from "react";
const SearchPage = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [terms, setTerms] = useState([]);
  const handleClick = () => {
    const terms = document.getElementById("input").value.split(",");
    setTerms(terms);
  };
  useEffect(() => {
    if (terms.length == 1) {
      const data1 = terms[0];
      axios
        .get(
          `${import.meta.env.VITE_APP_API_URL}` +
            `data?apiKey=kapil%Bansal_sharda_ac2025&data1=${data1}`
        )
        .then((response) => setData(response.data))
        .catch((error) => console.error(error));
    } else if (terms.length == 2) {
      const data1 = terms[0];
      const data2 = terms[1];
      console.log(
        `${import.meta.env.VITE_APP_API_URL}` +
          `data?apiKey=kapil%Bansal_sharda_ac2025&data1=${data1}&data2=${data2}`
      );
      axios
        .get(
          `${import.meta.env.VITE_APP_API_URL}` +
            `data?apiKey=kapil%Bansal_sharda_ac2025&data1=${data1}&data2=${data2}`
        )
        .then((response) => setData(response.data))
        .catch((error) => console.error(error));
    } else if (terms.length == 3) {
      const data1 = terms[0];
      const data2 = terms[1];
      const data3 = terms[2];
      axios
        .get(
          `${import.meta.env.VITE_APP_API_URL}` +
            `data?apiKey=kapil%Bansal_sharda_ac2025&data1=${data1}&data2=${data2}&data3=${data3}`
        )
        .then((response) => setData(response.data))
        .catch((error) => console.error(error));
    } else if (terms.length == 4) {
      const data1 = terms[0];
      const data2 = terms[1];
      const data3 = terms[2];
      const data4 = terms[3];
      axios
        .get(
          `${import.meta.env.VITE_APP_API_URL}` +
            `data?apiKey=kapil%Bansal_sharda_ac2025&data1=${data1}&data2=${data2}&data3=${data3}&data4=${data4}`
        )
        .then((response) => setData(response.data));
    } else if (terms.length > 5) {
      alert("Please enter only 4 or less terms");
    }
  }, [terms]);

  return (
    <>
      {(id === `${import.meta.env.VITE_APP_KEY}` && (
        <>
          <div>
            <h1 className="text-center  mt-10 font-bold text-[5vmin]">
              Welcome to the search page
            </h1>
            <p className="text-center">
              <input
                id="input"
                className="p-3 w-[50%] border-[1px] mt-8"
                placeholder="Enter terms to find by commas"
              ></input>
              <button
                className="align-center ml-4 p-3 bg-black text-white"
                onClick={handleClick}
              >
                Submit
              </button>
            </p>
          </div>
          <div>
            {(data.length > 0 && (
              <>
                <p className="text-center text-[3vmin] mt-24">
                  Search Results: {data.length}
                </p>
                <div className="flex flex-col justify-center items-center w-[100%] mt-10 gap-y-6 p-6">
                  <Card data={data} />
                </div>
              </>
            )) || (
              <p className="text-center text-[3vmin] mt-24">
                Search Results: {data.length}
              </p>
            )}
          </div>
        </>
      )) || <h1 className="text-center  mt-10">Page not found</h1>}
    </>
  );
};

export default SearchPage;
