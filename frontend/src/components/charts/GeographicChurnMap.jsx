import {
  ComposableMap,
  Geographies,
  Geography
} from "react-simple-maps";

const geoUrl =
  "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

function GeographicChurnMap() {
  return (
    <div className="card">
      <h3>Geographic Churn Map</h3>
      <ComposableMap>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#1e293b"
                stroke="#475569"
              />
            ))
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
}

export default GeographicChurnMap;
