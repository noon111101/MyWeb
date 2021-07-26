import React from "react";
import Navbar from "./Component/Navbar";
import ImageSlider from "./Component/ImageSlide";
import {SliderData} from "./Component/SliderData";
import "./App.css"
function App() {
  return (
    <div className="App">
      <header className="App-header">
         <Navbar/>
          <ImageSlider slides={SliderData}/>
      </header>
    </div>
  );
}

export default App;
