function KPISummary({ result }) {
  return (
    <div className="kpi-grid">
      <div className="kpi-card">
        <h3>User Category</h3>
        <p>{result.user_category}</p>
      </div>

      <div className="kpi-card">
        <h3>Churn Probability</h3>
        <p>{(result.churn_probability * 100).toFixed(1)}%</p>
      </div>

      <div className="kpi-card">
        <h3>Risk Level</h3>
        <p>{result.risk_level}</p>
      </div>

      <div className="kpi-card">
        <h3>Retention Rate</h3>
        <p>{(100 - result.churn_probability * 100).toFixed(1)}%</p>
      </div>
    </div>
  );
}

export default KPISummary;
