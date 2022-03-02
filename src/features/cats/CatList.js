import React from "react";

const CatList = ({ cats }) => {
  debugger;
  const catPics = cats.map((cat) => {
    return (
      <li key={cat.id}>
        <img src={cat.url} alt="cat" />
      </li>
    );
  });

  return (
    <div>
      <ul>{catPics}</ul>
    </div>
  );
};

export default CatList;
