import { useParams } from "react-router-dom";
import axios from "axios";
import Card from "./Card";

import { useEffect, useState } from "react";
import topIndex from "../../funcUtils/topSearchAlgo.js";
const SearchDBLP = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [data11, setData11] = useState([]);
  const [data21, setData21] = useState([]);
  const [data31, setData31] = useState([]);
  const [data41, setData41] = useState([]);

  const [terms, setTerms] = useState([]);

  //   console.log(topSearch());
  const handleClick = () => {
    const terms = document.getElementById("input").value.split(",");
    setTerms(terms);
  };
  useEffect(() => {
    if (terms.length == 1) {
      const data1 = terms[0];
      axios
        .get(
          `https://dblp.org/search/publ/api?q=${data1.toLowerCase()}` +
            `&format=json&h=${topIndex[data1.toLowerCase()]}`
        )
        .then((response) => {
          if (response.data.result.hits.hit != null) {
            setData11(response.data.result.hits.hit);
          } else {
            setData11([]);
          }
        })
        .catch((error) => console.error(error));
      setData(data11);
    } else if (terms.length == 2) {
      const data1 = terms[0];
      const data2 = terms[1];

      axios
        .get(
          `https://dblp.org/search/publ/api?q=${data1.toLowerCase()}` +
            `&format=json&h=${topIndex[data1.toLowerCase()]}`
        )
        .then((response) => {
          if (response.data.result.hits.hit != null) {
            setData11(response.data.result.hits.hit);
          } else {
            setData11([]);
          }
        });
      axios
        .get(
          `https://dblp.org/search/publ/api?q=${data2.toLowerCase()}` +
            `&format=json&h=${topIndex[data2.toLowerCase()]}`
        )
        .then((response) => {
          if (response.data.result.hits.hit != null) {
            setData21(response.data.result.hits.hit);
          } else {
            setData21([]);
          }
        });

      setData(data11.concat(data21));
    } else if (terms.length == 3) {
      const data1 = terms[0];
      const data2 = terms[1];
      const data3 = terms[2];
      axios
        .get(
          `https://dblp.org/search/publ/api?q=${data1.toLowerCase()}` +
            `&format=json&h=${topIndex[data1.toLowerCase()]}`
        )
        .then((response) => {
          if (response.data.result.hits.hit != null) {
            setData11(response.data.result.hits.hit);
          } else {
            setData11([]);
          }
        });
      axios
        .get(
          `https://dblp.org/search/publ/api?q=${data2.toLowerCase()}` +
            `&format=json&h=${topIndex[data2.toLowerCase()]}`
        )
        .then((response) => {
          if (response.data.result.hits.hit != null) {
            setData21(response.data.result.hits.hit);
          } else {
            setData21([]);
          }
        });
      axios
        .get(
          `https://dblp.org/search/publ/api?q=${data3.toLowerCase()}` +
            `&format=json&h=${topIndex[data3.toLowerCase()]}`
        )
        .then((response) => {
          if (response.data.result.hits.hit != null) {
            setData31(response.data.result.hits.hit);
          } else {
            setData31([]);
          }
        });

      setData(data11.concat(data21).concat(data31));
    } else if (terms.length == 4) {
      const data1 = terms[0];
      const data2 = terms[1];
      const data3 = terms[2];
      const data4 = terms[3];
      axios
        .get(
          `https://dblp.org/search/publ/api?q=${data1.toLowerCase()}` +
            `&format=json&h=${topIndex[data1.toLowerCase()]}`
        )
        .then((response) => {
          if (response.data.result.hits.hit != null) {
            setData11(response.data.result.hits.hit);
          } else {
            setData11([]);
          }
        });
      axios
        .get(
          `https://dblp.org/search/publ/api?q=${data2.toLowerCase()}` +
            `&format=json&h=${topIndex[data2.toLowerCase()]}`
        )
        .then((response) => {
          if (response.data.result.hits.hit != null) {
            setData21(response.data.result.hits.hit);
          } else {
            setData21([]);
          }
        });
      axios
        .get(
          `https://dblp.org/search/publ/api?q=${data3.toLowerCase()}` +
            `&format=json&h=${topIndex[data3.toLowerCase()]}`
        )
        .then((response) => {
          if (response.data.result.hits.hit != null) {
            setData31(response.data.result.hits.hit);
          } else {
            setData31([]);
          }
        });
      axios
        .get(
          `https://dblp.org/search/publ/api?q=${data4.toLowerCase()}` +
            `&format=json&h=${topIndex[data4.toLowerCase()]}`
        )
        .then((response) => {
          if (response.data.result.hits.hit != null) {
            setData41(response.data.result.hits.hit);
          } else {
            setData41([]);
          }
        });

      setData(data11.concat(data21).concat(data31).concat(data41));
    }
  }, [terms, data11, data21, data31, data41]);

  return (
    <>
      {(id === `${import.meta.env.VITE_APP_KEY}` && (
        <>
          <div>
            <p className="text-center">
              <input
                id="input"
                className="p-3 w-[50%] border-[1px] mt-8"
                placeholder="Enter terms to find by commas in DBLP..."
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
                  Search Results:{data.length > 0 ? data.length : 0}
                </p>
                <div className="flex flex-col justify-center items-center w-[100%]  gap-y-6 p-6">
                  <Card data={data} category="dblp" />
                </div>
              </>
            )) || (
              <p className="text-center text-[3vmin] mt-24">
                Search Results:{data.length > 0 ? data.length : 0}
              </p>
            )}
          </div>
        </>
      )) || <h1 className="text-center  mt-10">Page not found</h1>}
    </>
  );
};

export default SearchDBLP;
