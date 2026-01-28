function ResultCard({ result }) {
  return (
    <div>
      <h3>User Category: {result.user_category}</h3>
      <p>Churn Probability: {result.churn_probability}</p>
      <p>Risk Level: {result.risk_level}</p>
      <p>Top Factors:</p>
      <ul>
        {result.top_churn_factors.map((f) => (
          <li key={f}>{f}</li>
        ))}
      </ul>
    </div>
  );
}

export default ResultCard;
