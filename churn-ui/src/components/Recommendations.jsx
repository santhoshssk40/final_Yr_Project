function Recommendations({ risk }) {
  const suggestions =
    risk === "High"
      ? ["Offer discounts", "Improve delivery speed", "Re-engage user"]
      : ["Maintain service quality", "Upsell premium plans"];

  return (
    <div className="chart-card">
      <h4>Recommendations</h4>
      <ul>
        {suggestions.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ul>
    </div>
  );
}

export default Recommendations;
