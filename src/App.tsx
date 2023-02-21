import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

import Home from "./pages/Home";
import MediaLayerImages from "./pages/MediaLayerImages";
import MediaLayerVideo from "./pages/MediaLayerVideo";
import MediaLayerWebmap from "./pages/MediaLayerWebmap";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/media-layer-images" element={<MediaLayerImages />} />
        <Route path="/media-layer-video" element={<MediaLayerVideo />} />
        <Route path="/media-layer-webmap" element={<MediaLayerWebmap />} />
      </Routes>
    </Router>
  );
}

export default App;
