import { HashRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import MediaLayerImage from "./pages/MediaLayerImage";
import MediaLayerVideo from "./pages/MediaLayerVideo";
import MediaLayerWebmap from "./pages/MediaLayerWebmap";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/media-layer-image" element={<MediaLayerImage />} />
        <Route path="/media-layer-video" element={<MediaLayerVideo />} />
        <Route path="/media-layer-webmap" element={<MediaLayerWebmap />} />
      </Routes>
    </Router>
  );
}

export default App;
