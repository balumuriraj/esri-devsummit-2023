import { lazy, Suspense } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";

const Home = lazy(() => import("./pages/Home"));
const MediaLayerImage = lazy(() => import("./pages/MediaLayerImage"));
const MediaLayerVideo = lazy(() => import("./pages/MediaLayerVideo"));
const MediaLayerWebmap = lazy(() => import("./pages/MediaLayerWebmap"));

const HomePage = () => (
  <Suspense fallback={<div>Page is Loading...</div>}>
    <Home />
  </Suspense>
);

const MediaLayerImagePage = () => (
  <Suspense fallback={<div>Page is Loading...</div>}>
    <MediaLayerImage />
  </Suspense>
);

const MediaLayerVideoPage = () => (
  <Suspense fallback={<div>Page is Loading...</div>}>
    <MediaLayerVideo />
  </Suspense>
);

const MediaLayerWebmapPage = () => (
  <Suspense fallback={<div>Page is Loading...</div>}>
    <MediaLayerWebmap />
  </Suspense>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/media-layer-image" element={<MediaLayerImagePage />} />
        <Route path="/media-layer-video" element={<MediaLayerVideoPage />} />
        <Route path="/media-layer-webmap" element={<MediaLayerWebmapPage />} />
      </Routes>
    </Router>
  );
}

export default App;
