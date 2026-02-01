import { MapContainer, TileLayer, CircleMarker, Tooltip } from "react-leaflet";
import SectionCard from "./SectionCard";

const GeographicChurnMap = ({ data }) => {
  return (
    <SectionCard title="Geographic Churn Risk">
      <div className="h-[420px] w-full rounded-lg overflow-hidden">
        <MapContainer
          center={[20, 0]}
          zoom={2}
          scrollWheelZoom={false}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            attribution="© OpenStreetMap contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {data.map((r, i) => (
            <CircleMarker
              key={i}
              center={[r.lat, r.lng]}
              radius={10}
              pathOptions={{
                color:
                  r.risk === "high"
                    ? "#ef4444"
                    : r.risk === "medium"
                    ? "#eab308"
                    : "#22c55e",
                fillOpacity: 0.85
              }}
            >
              <Tooltip direction="top" offset={[0, -10]} opacity={1}>
                <strong>{r.region}</strong>
                <br />
                {r.churnRisk}% churn risk
              </Tooltip>
            </CircleMarker>
          ))}
        </MapContainer>
      </div>
    </SectionCard>
  );
};

export default GeographicChurnMap;
