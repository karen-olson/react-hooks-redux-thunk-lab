import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCats } from "./catsSlice";
import CatList from "./CatList";

function Cats() {
  // get data from state with useSelector
  const cats = useSelector((state) => state.entities);
  const dispatch = useDispatch();
  // send the list of cat pics to CatList to render

  useEffect(() => {
    dispatch(fetchCats());
  }, []);

  return (
    <div>
      <h1>CatBook</h1>
      {cats.length > 0 ? <CatList cats={cats} /> : null}
    </div>
  );
}

export default Cats;
