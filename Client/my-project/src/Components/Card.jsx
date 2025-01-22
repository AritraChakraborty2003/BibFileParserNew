/* eslint-disable no-prototype-builtins */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

const Card = (props) => {
  return (
    <>
      {props.category === "acl" &&
        props.data.map((val) => (
          <div className="holder w-[100%] lg:w-[70%] border-[1px] p-[2vmin] lg:p-[4vmin]">
            <p className="font-bold">Title: {val.entryTags.TITLE}</p>
            <p>Author: {val.entryTags.AUTHOR}</p>
            <p>year:{val.entryTags.YEAR}</p>
            <a
              href={val.entryTags.URL}
              target="_blank"
              className="text-[2.15vmin] lg:text-[2.45vmin]"
            >
              Link:{val.entryTags.URL}
            </a>
          </div>
        ))}
      {props.category === "dblp" &&
        props.data.length > 0 &&
        props.data
          .filter((val) => val.hasOwnProperty("info") === true)
          .map((val, ind) => (
            <div
              className="holder w-[100%] lg:w-[70%] border-[1px] p-[2vmin] lg:p-[4vmin]"
              key={ind}
            >
              <p className="font-bold">Title: {val.info.title || "not"}</p>
              <p>year:{val.info.year}</p>
              <p>type:{val.info.type}</p>
              <a
                href={val.info.url}
                target="_blank"
                className="text-[2.05vmin] lg:text-[2.45vmin]"
              >
                Link:{val.info.url}
              </a>{" "}
              <a
                href={val.info.ee}
                target="_blank"
                className="text-[2.05vmin] lg:text-[2.45vmin]"
              >
                ee:{val.info.ee}
              </a>{" "}
            </div>
          ))}
    </>
  );
};

export default Card;
