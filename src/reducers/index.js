import {
  FETCH_SUCCESS,
  FETCH_FAIL,
  FETCH_START,
  ADD_COMMENT,
} from "../actions";
import { jsonObjAll } from "../actions/data";

let randOneInit = Math.ceil(Math.random() * jsonObjAll.length);
let randTwoInit = Math.ceil(Math.random() * jsonObjAll.length);
let randThreeInit = Math.ceil(Math.random() * jsonObjAll.length);
let randFourInit = Math.ceil(Math.random() * jsonObjAll.length);

const initialState = {
  comics: jsonObjAll,
  isFetching: false,
  err: "",
  showedComics: [
    jsonObjAll[randOneInit],
    jsonObjAll[randTwoInit],
    jsonObjAll[randThreeInit],
    jsonObjAll[randFourInit],
  ],
};

export const comicReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_SUCCESS:
      let randOne = Math.ceil(Math.random() * state.comics.length);
      let randTwo = Math.ceil(Math.random() * state.comics.length);
      let randThree = Math.ceil(Math.random() * state.comics.length);
      let randFour = Math.ceil(Math.random() * state.comics.length);
      console.log(randOne, randThree, randFour);
      let res = [
        state.comics[randOne],
        state.comics[randTwo],
        state.comics[randThree],
        state.comics[randFour],
      ];
      console.log(res);
      return {
        ...state,
        showedComics: [...state.showedComics, ...res],
        isLoading: false,
        error: "",
      };
    case FETCH_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case ADD_COMMENT:
      return {
        ...state,
        comics: state.comics.map((comic) => {
          if (Number(comic.num) === Number(action.payload.num)) {
            return {
              ...comic,
              comments: [...comic.comments, action.payload.comment],
            };
          } else {
            return comic;
          }
        }),
      };
    default:
      return state;
  }
};
