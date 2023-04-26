import { Map, MapMarker, MapMarkerProps } from "react-kakao-maps-sdk";

const KakaoMap = () => {
  return (
    <Map
      center={{ lat: 37.5133748, lng: 126.8737628 }}
      style={{ width: "100%", height: "100%" }}
    >
      <MapMarker 
        position={{lat: 37.516566, lng: 126.875128}}
        image={{src: '../images/map_marker.png', size: {height: 35, width: 35}}} 
        />
    </Map>
  );
};

export default KakaoMap;
