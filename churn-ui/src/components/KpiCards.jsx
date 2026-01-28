
function KpiCards({ data }) {
  return (
    <div className="kpi-grid">
      <div className="kpi-card">
        <h4>Total Customers</h4>
        <p>{data.totalCustomers}</p>
      </div>

      <div className="kpi-card">
        <h4>High Risk Customers</h4>
        <p>{data.highRisk}</p>
      </div>

      <div className="kpi-card">
        <h4>Avg Churn Probability</h4>
        <p>{(data.avgChurn * 100).toFixed(1)}%</p>
      </div>

      <div className="kpi-card">
        <h4>Retention Rate</h4>
        <p>{(100 - data.avgChurn * 100).toFixed(1)}%</p>
      </div>
    </div>
  );
}

export default KpiCards;
