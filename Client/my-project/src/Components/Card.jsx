/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

const Card = (props) => {
  return (
    <>
      {props.data.map((val) => (
        <div className="holder w-[100%] lg:w-[70%] border-[1px] p-[2vmin] lg:p-[4vmin]">
          <p className="font-bold">Title: {val.entryTags.TITLE}</p>
          <p>Author: {val.entryTags.AUTHOR}</p>
          <p>year:{val.entryTags.YEAR}</p>
          <a href={val.entryTags.URL} target="_blank" className="text-[1.85vmin]">
            Link:{val.entryTags.URL}
          </a>
        </div>
      ))}
    </>
  );
};

export default Card;
