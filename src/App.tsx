import { HashRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import { lazyWithRetries } from "./support/utils";

const Home = lazyWithRetries(() => import("./pages/Home"));
const MediaLayerImage = lazyWithRetries(() => import("./pages/MediaLayerImage"));
const MediaLayerVideo = lazyWithRetries(() => import("./pages/MediaLayerVideo"));
const MediaLayerWebmap = lazyWithRetries(() => import("./pages/MediaLayerWebmap"));

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
