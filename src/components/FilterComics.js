import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { searchComics, fetchComics } from "../actions";

const FilterComics = () => {
  const [search, setSearch] = useState("");
  const [searched, setSearched] = useState(false);
  const dispatch = useDispatch();

  const changeHandler = async (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    if (search.length > 2) {
      console.log("run if search", search);
      dispatch(searchComics(search));
      setSearched(true);
    } else if (search.length < 3 && searched) {
      dispatch(fetchComics);
      setSearched(false);
    }
  }, [search, dispatch, searched]);

  return (
    <div className=" flex flex-col items-center mb-6 mr-2">
      <p>Search Comic by Title</p>
      <input
        class="focus:ring-indigo-500 focus:border-indigo-500 block text-xl border-gray-300 rounded-md"
        type="text"
        name="jumpToNum"
        value={search}
        onChange={changeHandler}
      ></input>
    </div>
  );
};

export default FilterComics;
