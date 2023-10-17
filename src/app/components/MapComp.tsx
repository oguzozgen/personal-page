import "leaflet/dist/leaflet.css";
import "../globals.css";
import { MapContainer, TileLayer } from "react-leaflet";
import L from "leaflet";

export default function MapComp(props) {
  L.Icon.Default.mergeOptions({
    iconSize: [60, 50],
    shadowSize: [0, 0],
    popupAnchor: [3, -35],
  });
  //delete L.Icon.Default.prototype._getIconUrl;
  /*const [lat:Leafle, setLat] = useState(-65.05293398570514);
  const [lng, setLng] = useState(-15.0);
  const [zoom, setZoom] = useState(2.4);
  const [position, setPosition] = useState([lat, lng]);
  const [positionCenter, setPositionCenter] = useState([10.0, -15.0]);*/
  return (
    <MapContainer
      center={[35.505, 117]}
      zoom={4}
      scrollWheelZoom={false}
      zoomControl={false}
      style={{
        height: "100vh",
        width: "100%",
        padding: "0px",
        margin: "0px",
        ...props.style,
      }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright" style="background:rgba(255, 255, 255, 0.2);">OpenStreetMap</a> contributors'
        url="https://cartocdn-gusc.global.ssl.fastly.net/opmbuilder/api/v1/map/named/opm-mars-basemap-v0-2/all/{z}/{x}/{y}.png"
      />
      {props.children}
    </MapContainer>
  );
}

/**
 <MapContainer
      zoomControl={false}
      zoom={zoom}
      style={{ height: "100vh", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="Tiles &copy; Esri &mdash;"
        minZoom={1}
        maxZoom={13}
      />
      {props.children}
    </MapContainer>
 */
