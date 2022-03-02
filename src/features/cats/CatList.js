import React from "react";

const CatList = ({ cats }) => {
  const catPics = cats.entities.map((cat) => {
    return (
      <li key={cat.id}>
        <img src={cat.url} alt="cat" />
      </li>
    );
  });

  console.log(cats.status);

  if (cats.status === "loading") {
    return <h1>Loading</h1>;
  } else {
    return (
      <div>
        <ul>{catPics}</ul>
      </div>
    );
  }
};

export default CatList;
