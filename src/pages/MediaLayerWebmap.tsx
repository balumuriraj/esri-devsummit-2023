import { useEffect, useRef, useState } from "react";

import esriConfig from "@arcgis/core/config";
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

    esriConfig.portalUrl = "http://devtesting.mapsdevext.arcgis.com/";

    const webmap = new WebMap({
      portalItem: {
        id: "d8ec80ff66324308b4abd36edf9263e4" // webmap id
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
