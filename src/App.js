import "./App.css";
import { RouterProvider } from "react-router-dom";
import { routes } from "./Routes/Routes/Routes";
import { useEffect, useState } from "react";

function App() {
  // document.onreadystatechange = function () {
  //   if (document.readyState !== "complete") {
  //     document.querySelector("body").style.visibility = "hidden";
  //     document.querySelector("#loader").style.visibility = "visible";
  //   } else {
  //     document.querySelector("#loader").style.display = "none";
  //     document.querySelector("body").style.visibility = "visible";
  //   }
  // };
  return (
    <div>
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
