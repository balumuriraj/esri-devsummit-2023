import { useEffect, useRef, useState } from "react";

import MapView from "@arcgis/core/views/MapView";
import Map from "@arcgis/core/Map";
import MediaLayer from "@arcgis/core/layers/MediaLayer";
import Expand from "@arcgis/core/widgets/Expand";
import ImageElement from "@arcgis/core/layers/support/ImageElement";
import ExtentAndRotationGeoreference from "@arcgis/core/layers/support/ExtentAndRotationGeoreference";
import Extent from "@arcgis/core/geometry/Extent";
import { Point } from "@arcgis/core/geometry";
import ControlPointsGeoreference from "@arcgis/core/layers/support/ControlPointsGeoreference";
import CornersGeoreference from "@arcgis/core/layers/support/CornersGeoreference";
import esriConfig from "@arcgis/core/config";
import Swipe from "@arcgis/core/widgets/Swipe";

import "@esri/calcite-components/dist/components/calcite-button";
import { CalciteButton } from "@esri/calcite-components-react";

import Prism from "prismjs";
import "prismjs/plugins/line-numbers/prism-line-numbers";

import "../App.css";
import "@esri/calcite-components/dist/calcite/calcite.css";
import "prismjs/themes/prism.css";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";

function MediaLayerImages() {
  const viewDivRef = useRef<HTMLDivElement>(null);
  const codeMediaLayerRef = useRef<HTMLDivElement>(null);
  const codeControlPointsGeoreferenceRef = useRef<HTMLDivElement>(null);

  const [view, setView] = useState<MapView | null>(null);
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
      basemap: "satellite",
      // basemap: {
      //   portalItem: {
      //     id: "3582b744bba84668b52a16b0b6942544",
      //   },
      // },
    });

    const view = new MapView({
      container: viewDivRef?.current,
      map: map,
      zoom: 3,
    });

    view.ui.add(
      [
        new Expand({
          view: view,
          content: codeMediaLayerRef?.current!,
          expanded: true,
          group: "group1",
          expandTooltip: "MediaLayer",
        }),
      ],
      "top-left"
    );

    setView(view);
  }

  async function runMediaLayer() {
    const imageElement = new ImageElement({
      image: `Liverpool.png`,
      georeference: new ExtentAndRotationGeoreference({
        extent: new Extent({
          spatialReference: {
            wkid: 102100,
          },
          xmin: -339441.5168570463,
          ymin: 7051887.318179514,
          xmax: -324839.58261292917,
          ymax: 7067371.687353565,
        }),
      }),
    });

    const layer = new MediaLayer({ source: [imageElement] });
    view!.map.layers.add(layer);

    await view!.when();
    await layer.when();

    setLayer(layer);

    // create a new Swipe widget
    const swipe = new Swipe({
      leadingLayers: [layer],
      position: 75,
      view: view!,
    });

    let isLeft = true;
    let count = 0;

    const handle = setInterval(() => {
      if (count === 2) {
        clearInterval(handle);
        return;
      }

      if (isLeft) {
        swipe.position = swipe.position - 0.05;
      } else {
        swipe.position = swipe.position + 0.05;
      }

      if (swipe.position === 40) {
        isLeft = false;
      } else if (swipe.position === 75) {
        isLeft = true;
        count++;
      }
    }, 1);

    // add the widget to the view
    view!.ui.add(swipe);
    view?.goTo(
      new Extent({
        spatialReference: { wkid: 102100 },
        xmin: -339441.5168570463,
        ymin: 7051887.318179514,
        xmax: -324839.58261292917,
        ymax: 7067371.687353565,
      }).expand(1)
    );
  }

  const codeMediaLayer = `new MediaLayer({ 
  source: new ImageElement({
    image: "/Liverpool.png",
    georeference: new ExtentAndRotationGeoreference({
      extent: new Extent({
        spatialReference: { wkid: 102100 },
        xmin: -339441.5168570463,
        ymin: 7051887.318179514,
        xmax: -324839.58261292917,
        ymax: 7067371.687353565,
      })
    })
  })
});`;

  return (
    <div className="App">
      <div id="view" ref={viewDivRef}></div>
      <div ref={codeMediaLayerRef} className="card">
        <p>MediaLayer</p>
        <pre className="line-numbers">
          <code className="language-js">{codeMediaLayer}</code>
        </pre>
        <CalciteButton
          className="btn"
          icon-start="play"
          onClick={runMediaLayer}
        ></CalciteButton>
      </div>
    </div>
  );
}

export default MediaLayerImages;
