export function fetchCats() {
  return function (dispatch) {
    dispatch({ type: "cats/catsLoading" });

    fetch("https://learn-co-curriculum.github.io/cat-api/cats.json")
      .then((resp) => resp.json())
      .then((catData) => {
        dispatch({ type: "cats/catsLoaded", payload: catData.images });
      });
  };
}

const initialState = {
  entities: [],
  status: "idle",
};

export default function catsReducer(state = initialState, action) {
  // set up a switch that handles cats/catsLoading and cats/catsLoaded

  switch (action.type) {
    case "cats/catsLoading":
      return {
        ...state,
        status: "loading",
      };
    case "cats/catsLoaded":
      return {
        ...state,
        entities: action.payload,
        status: "idle",
      };
    default:
      return state;
  }
}
