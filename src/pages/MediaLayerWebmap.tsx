import { useEffect, useRef, useState } from "react";

import WebMap from "@arcgis/core/WebMap";
import MapView from "@arcgis/core/views/MapView";

import "../App.css";
import "@esri/calcite-components/dist/calcite/calcite.css";

function MediaLayerWebmap() {
  const viewDivRef = useRef<HTMLDivElement>(null);

  const [view, setView] = useState<MapView | null>(null);

  useEffect(() => {
    /**
     * Initialize application
     */
    initApp();
  }, []);

  async function initApp(): Promise<void> {
    if (!viewDivRef?.current) {
      return;
    }

    const webmap = new WebMap({
      portalItem: {
        id: "769b776b17c4406493b5f96044c26696" // 4779f8c1002443c68eb4c7fbb9baf88c
      }
    });

    const view = new MapView({
      container: viewDivRef?.current,
      map: webmap
    });

    setView(view);
  }

  return (
    <div className="App">
      <div id="view" ref={viewDivRef}></div>
    </div>
  );
}

export default MediaLayerWebmap;
