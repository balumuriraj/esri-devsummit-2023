import { useEffect, useRef, useState } from "react";

import SceneView from "@arcgis/core/views/SceneView";
import Map from "@arcgis/core/Map";
import MediaLayer from "@arcgis/core/layers/MediaLayer";
import Expand from "@arcgis/core/widgets/Expand";
import VideoElement from "@arcgis/core/layers/support/VideoElement";
import ExtentAndRotationGeoreference from "@arcgis/core/layers/support/ExtentAndRotationGeoreference";
import Extent from "@arcgis/core/geometry/Extent";
import esriConfig from "@arcgis/core/config";
import Slider from "@arcgis/core/widgets/Slider";

import "@esri/calcite-components/dist/components/calcite-button";
import { CalciteButton } from "@esri/calcite-components-react";

import Prism from "prismjs";
import 'prismjs/plugins/line-numbers/prism-line-numbers';

import "../App.css";
import "@esri/calcite-components/dist/calcite/calcite.css";
import "prismjs/themes/prism.css";
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';

function MediaLayerVideo() {
  const viewDivRef = useRef<HTMLDivElement>(null);
  const codeRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  const [view, setView] = useState<SceneView | null>(null);
  const [layer, setLayer] = useState<MediaLayer | null>(null);

  useEffect(() => {
    /**
     * Initialize application
     */
    initApp();
  }, []);

  async function initApp(): Promise<void> {
    Prism.highlightAll();

    if (!viewDivRef?.current) {
      return;
    }

    esriConfig.portalUrl = "http://arcgis.com/";

    const map = new Map({
      basemap: {
        portalItem: {
          id: "eb303185d14e45e9be8bbbc1c0daf7ab",
        },
      },
    });

    const view = new SceneView({
      container: viewDivRef?.current,
      map: map,
      center: [-65, 40],
      constraints: {
        altitude: {
          min: 2000000,
        },
      },
    });

    view.ui.add(
      [
        new Expand({
          view: view,
          content: codeRef?.current!,
          expanded: true,
          group: "group1",
          expandTooltip: "MediaLayer",
        }),
      ],
      "top-left"
    );

    setView(view);
  }

  async function run() {
    const element = new VideoElement({
      video:
        "https://arcgis.github.io/arcgis-samples-javascript/sample-data/media-layer/videos/hurricanes_aerosol-aug.mp4",
      georeference: new ExtentAndRotationGeoreference({
        extent: new Extent({
          xmin: -150,
          ymin: 1,
          xmax: 20,
          ymax: 80,
          spatialReference: {
            wkid: 4326,
          },
        }),
      }),
    });

    const layer = new MediaLayer({
      source: [element],
      title: "2017 Hurricanes and Aerosols Simulation",
      copyright: "NASA's Goddard Space Flight Center",
    });
    view!.map.layers.add(layer);

    await view!.when();
    await layer.when();

    setLayer(layer);
  }

  const code = 
`new MediaLayer({ 
  source: new VideoElement({
    video: "/aerosol.mp4",
    georeference: 
      new ExtentAndRotationGeoreference({
        extent: new Extent({
          xmin: -150, 
          ymin: 1, 
          xmax: 20, 
          ymax: 80,
          spatialReference: { wkid: 4326 }
        })
      })
  }) 
});`;

  return (
    <div className="App">
      <div id="view" ref={viewDivRef}></div>
      <div ref={codeRef} className="card">
        <p className="title">MediaLayer</p>
        <pre className="line-numbers">
          <code className="language-js">{code}</code>
        </pre>

        <div ref={sliderRef} className="slider"></div>
        <CalciteButton
          className="btn"
          icon-start="play"
          onClick={run}
        ></CalciteButton>
      </div>
    </div>
  );
}

export default MediaLayerVideo;
