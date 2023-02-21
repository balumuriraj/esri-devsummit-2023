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

import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";

import "../App.css";
import "@esri/calcite-components/dist/calcite/calcite.css";
import "highlight.js/styles/github.css";

hljs.registerLanguage("javascript", javascript);

function MediaLayerImages() {
  const viewDivRef = useRef<HTMLDivElement>(null);
  const codeMediaLayerRef = useRef<HTMLDivElement>(null);
  const codeExtentAndRotationGeoreferenceRef = useRef<HTMLDivElement>(null);
  const codeCornersGeoreferenceRef = useRef<HTMLDivElement>(null);
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
    hljs.highlightAll();

    if (!viewDivRef?.current) {
      return;
    }

    esriConfig.portalUrl = "http://arcgis.com/";

    const map = new Map({
      basemap: {
        portalItem: {
          id: "3582b744bba84668b52a16b0b6942544",
        },
      },
    });

    const view = new MapView({
      container: viewDivRef?.current,
      map: map,
      zoom: 10,
      center: [-89.93307, 29.973197296501905],
      constraints: {
        snapToZoom: false,
        minScale: 1155582,
      },
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
        new Expand({
          view: view,
          content: codeExtentAndRotationGeoreferenceRef?.current!,
          group: "group1",
          expandTooltip: "ExtentAndRotationGeoreference",
        }),
        new Expand({
          view: view,
          content: codeCornersGeoreferenceRef?.current!,
          group: "group1",
          expandTooltip: "CornersGeoreference",
        }),
        new Expand({
          view: view,
          content: codeControlPointsGeoreferenceRef?.current!,
          group: "group1",
          expandTooltip: "ControlPointsGeoreference",
        }),
      ],
      "top-left"
    );

    setView(view);
  }

  async function runMediaLayer() {
    const imageElement = new ImageElement({
      image: `https://arcgis.github.io/arcgis-samples-javascript/sample-data/media-layer/new-orleans/chef-menteur1892.png`,
      georeference: new ExtentAndRotationGeoreference({
        extent: new Extent({
          spatialReference: {
            wkid: 102100,
          },
          xmax: -10003257.6023701,
          xmin: -10043731.008847024,
          ymax: 3513936.582106864,
          ymin: 3486773.1082574953,
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
      // trailingLayers: [nearInfrared],
      position: 80, // set position of widget to 35%
      view: view!,
    });

    // add the widget to the view
    view!.ui.add(swipe);
    view?.goTo(
      new Extent({
        spatialReference: {
          wkid: 102100,
        },
        xmax: -10003257.6023701,
        xmin: -10043731.008847024,
        ymax: 3513936.582106864,
        ymin: 3486773.1082574953,
      }).expand(1.5)
    );
  }

  function runExtentAndRotationGeoreference() {
    const imageElement = new ImageElement({
      image: `https://arcgis.github.io/arcgis-samples-javascript/sample-data/media-layer/new-orleans/neworleans1891.png`,
      georeference: new ExtentAndRotationGeoreference({
        extent: new Extent({
          spatialReference: {
            wkid: 102100,
          },
          xmin: -10047456.27662979,
          ymin: 3486722.2723874687,
          xmax: -10006982.870152846,
          ymax: 3514468.91365495,
        }),
      }),
    });

    layer!.source!.elements!.add(imageElement);
    view?.goTo(
      new Extent({
        spatialReference: {
          wkid: 102100,
        },
        xmin: -10047456.27662979,
        ymin: 3486722.2723874687,
        xmax: -10006982.870152846,
        ymax: 3514468.91365495,
      }).expand(1.5)
    );
  }

  function runCornersGeoreference() {
    const imageElement = new ImageElement({
      image: `https://arcgis.github.io/arcgis-samples-javascript/sample-data/media-layer/new-orleans/spanish-fort1891.png`,
      georeference: new CornersGeoreference({
        bottomRight: new Point({
          x: -10008215.143195309,
          y: 3486794.2321162825,
          spatialReference: {
            wkid: 102100,
          },
        }),
        bottomLeft: new Point({
          x: -10061466.93004702,
          y: 3486794.2321162825,
          spatialReference: {
            wkid: 102100,
          },
        }),
        topRight: new Point({
          x: -10008215.143195309,
          y: 3514418.4006159767,
          spatialReference: {
            wkid: 102100,
          },
        }),
        topLeft: new Point({
          x: -10061466.93004702,
          y: 3514418.4006159767,
          spatialReference: {
            wkid: 102100,
          },
        }),
      }),
    });

    layer!.source!.elements!.add(imageElement);
    view?.goTo(
      new Extent({
        spatialReference: {
          wkid: 102100,
        },
        xmax: -10008215.143195309,
        xmin: -10061466.93004702,
        ymax: 3514418.4006159767,
        ymin: 3486794.2321162825,
      }).expand(1.5)
    );
  }

  function runControlPointsGeoreference() {
    const imageElement = new ImageElement({
      image: `https://arcgis.github.io/arcgis-samples-javascript/sample-data/media-layer/new-orleans/st-bernard1892.png`,
      georeference: new ControlPointsGeoreference({
        width: 1246,
        height: 669,
        controlPoints: [
          {
            sourcePoint: { x: 0, y: 669 },
            mapPoint: new Point({
              x: -10046739.695935503,
              y: 3486942.691935667,
              spatialReference: { wkid: 102100 },
            }),
          },
          {
            sourcePoint: { x: 0, y: 0 },
            mapPoint: new Point({
              x: -10046739.695935503,
              y: 3514979.040597104,
              spatialReference: { wkid: 102100 },
            }),
          },
          {
            sourcePoint: { x: 1246, y: 0 },
            mapPoint: new Point({
              x: -10001415.789436923,
              y: 3514979.040597104,
              spatialReference: { wkid: 102100 },
            }),
          },
          {
            sourcePoint: { x: 1246, y: 669 },
            mapPoint: new Point({
              x: -10001415.789436923,
              y: 3486942.691935667,
              spatialReference: { wkid: 102100 },
            }),
          },
        ],
      }),
    });

    layer!.source!.elements!.add(imageElement);
    view?.goTo(
      new Extent({
        spatialReference: {
          wkid: 102100,
        },
        xmax: -10001415.789436923,
        xmin: -10046739.695935503,
        ymax: 3514979.040597104,
        ymin: 3486942.691935667,
      }).expand(1.5)
    );
  }

  const codeMediaLayer = `
  new MediaLayer({ 
    source: [
      new ImageElement({
        image: "image url or image data",
        georeference: {...}
      })
    ] 
  });
  `;

  const codeExtentAndRotationGeoreference = `
  new ExtentAndRotationGeoreference({
    extent: new Extent({
      spatialReference: { wkid: 102100 },
      xmin: -10047456.27662979,
      ymin: 3486722.2723874687,
      xmax: -10006982.870152846,
      ymax: 3514468.91365495,
    }),
  })
  `;

  const codeCornersGeoreference = `
  new CornersGeoreference({
    bottomRight: new Point({
      x: -10008215.143195309,
      y: 3486794.2321162825,
      spatialReference: { wkid: 102100 },
    }),
    bottomLeft: new Point({
      x: -10061466.93004702,
      y: 3486794.2321162825,
      spatialReference: { wkid: 102100 },
    }),
    topRight: new Point({
      x: -10008215.143195309,
      y: 3514418.4006159767,
      spatialReference: { wkid: 102100 },
    }),
    topLeft: new Point({
      x: -10061466.93004702,
      y: 3514418.4006159767,
      spatialReference: { wkid: 102100 },
    }),
  })
  `;

  const codeControlPointsGeoreference = `
  new ControlPointsGeoreference({
    width: 1246,
    height: 669,
    controlPoints: [
      {
        sourcePoint: { x: 0, y: 669 },
        mapPoint: new Point({ 
          x: -10046739.695935503, 
          y: 3486942.691935667, 
          spatialReference: { wkid: 102100 } 
        }),
      },
      {
        sourcePoint: { x: 0, y: 0 },
        mapPoint: new Point({
          x: -10046739.695935503,
          y: 3514979.040597104,
          spatialReference: { wkid: 102100 },
        }),
      },
      {
        sourcePoint: { x: 1246, y: 0 },
        mapPoint: new Point({
          x: -10001415.789436923,
          y: 3514979.040597104,
          spatialReference: { wkid: 102100 },
        }),
      },
      {
        sourcePoint: { x: 1246, y: 669 },
        mapPoint: new Point({
          x: -10001415.789436923,
          y: 3486942.691935667,
          spatialReference: { wkid: 102100 },
        }),
      },
    ],
  })
  `;

  return (
    <div className="App">
      <div id="view" ref={viewDivRef}></div>
      <div ref={codeMediaLayerRef} className="card">
        <p>MediaLayer</p>
        <pre>
          <code className="javascript">{codeMediaLayer}</code>
        </pre>
        <CalciteButton
          className="btn"
          icon-start="play"
          onClick={runMediaLayer}
        ></CalciteButton>
      </div>
      <div ref={codeExtentAndRotationGeoreferenceRef} className="card">
        <p>ExtentAndRotationGeoreference</p>
        <pre>
          <code className="javascript">
            {codeExtentAndRotationGeoreference}
          </code>
        </pre>
        <CalciteButton
          className="btn"
          icon-start="play"
          onClick={runExtentAndRotationGeoreference}
        ></CalciteButton>
      </div>
      <div ref={codeCornersGeoreferenceRef} className="card">
        <p>CornersGeoreference</p>
        <pre>
          <code className="javascript">{codeCornersGeoreference}</code>
        </pre>
        <CalciteButton
          className="btn"
          icon-start="play"
          onClick={runCornersGeoreference}
        ></CalciteButton>
      </div>
      <div ref={codeControlPointsGeoreferenceRef} className="card">
        <p>ControlPointsGeoreference</p>
        <pre>
          <code className="javascript">{codeControlPointsGeoreference}</code>
        </pre>
        <CalciteButton
          className="btn"
          icon-start="play"
          onClick={runControlPointsGeoreference}
        ></CalciteButton>
      </div>
    </div>
  );
}

export default MediaLayerImages;
