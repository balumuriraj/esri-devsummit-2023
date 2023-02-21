import React from "react";
import { Link } from "react-router-dom";

import "../App.css";

function Home() {
  return (
    <div className="home">
      <div className="link">
        <Link to="/media-layer-images">MediaLayerImages</Link>
      </div>
      <div className="link">
        <Link to="/media-layer-video">MediaLayerVideo</Link>
      </div>
      <div className="link">
        <Link to="/media-layer-webmap">MediaLayerWebmap</Link>
      </div>
    </div>
  );
}

export default Home;
