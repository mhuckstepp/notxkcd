import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Comics from "./components/Comics";
import FullComic from "./components/FullComic";
import GetComicByNumForm from "./components/GetComicByNumForm";
import FilterComics from "./components/FilterComics";

function App() {
  return (
    <Router>
      <Switch>
        <div className=" container flex flex-col justify-start items-center bg-gray-50 ">
          <div className=" flex justify-between bg-gradient-to-r from-yellow-200 via-red-200 to-pink-200 rounded w-full shadow-xl lg:flex-col">
            <Link to="/">
              <p className="underline inline font-black text-lg m-2">Go Home</p>
            </Link>
            <h1 className="text-8xl self-center lg:text-6xl  ml-24 lg:m-0 ">
              {" "}
              xkcd comics
            </h1>
            <div className=" flex flex-col justify-center	">
              <Route exact path="/" component={FilterComics} />
              <GetComicByNumForm />
            </div>
          </div>
          <div className="mx-auto  ">
            <Route exact path="/" component={Comics} />
            <Route path="/:num" component={FullComic} />
            {/* <FaviAnimation /> */}
          </div>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
