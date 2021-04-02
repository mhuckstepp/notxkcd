// import { useEffect } from "react";
import { fetchComics } from "../actions";
import { useSelector, useDispatch } from "react-redux";
import Comic from "./Comic";
import InfiniteScroll from "react-infinite-scroll-component";

const Comics = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchComics());
  // }, [dispatch]);

  function fetchMore() {
    dispatch(fetchComics());
  }

  return (
    <div>
      <div className="flex flex-col items-center border-2 border-black w-4/5 m-auto ">
        {state.isLoading && <div>"LOADING...."</div>}
        {state.error && <div>"ERROR WHILE LOADING"</div>}

        <InfiniteScroll
          dataLength={state.showedComics.length}
          next={() => fetchMore()}
          hasMore={true}
          loader={<h4>...</h4>}
        >
          {state.showedComics.map((comic) => {
            return <Comic comic={comic} key={comic.num} />;
          })}
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default Comics;
