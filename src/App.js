import Comics from "./components/Comics";
import FullComic from "./components/FullComic";
import GetComicByNumForm from "./components/GetComicByNumForm";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import FilterComics from "./components/FilterComics";

function App() {
  return (
    <Router>
      <Switch>
        <div className="flex flex-col justify-start items-center  ">
          <div className=" flex justify-between w-full bg-gradient-to-r from-yellow-200 via-red-200 to-pink-200  rounded shadow-xl h-1/6">
            <Link to="/">
              <p className="underline inline font-black text-lg m-2">Go Home</p>
            </Link>
            <h1 className="text-8xl self-center ml-36 "> xkcd comics</h1>
            <div className=" flex flex-col justify-center">
              <FilterComics />
              <GetComicByNumForm />
            </div>
          </div>
          <Route exact path="/" component={Comics} />
          <Route path="/:num" component={FullComic} />
          {/* <FaviAnimation /> */}
        </div>
      </Switch>
    </Router>
  );
}

export default App;
