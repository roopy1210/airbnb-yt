import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';

const MapBoxMap = () => {

    const [viewPort, setViewPort] = useState({
        width: "100%",
        height: "100%",
        latitude: 37.4820071,
        longitude: 126.9966436,
        zoom: 12,
    })

  return (
    <ReactMapGL
        mapStyle='mapbox://styles/roopy/clcii047a004615t69tyrkjki'
        mapboxAccessToken={process.env.mapbox_key}
        {...viewPort}
    >

    </ReactMapGL>
  )
}

export default MapBoxMap