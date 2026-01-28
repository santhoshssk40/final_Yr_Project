import { useState } from "react";

function ChurnForm({ onSubmit }) {
  const [form, setForm] = useState({
    orders_per_month: "",
    avg_order_value: "",
    avg_delivery_time: "",
    avg_rating: "",
    discount_rate: "",
    recency_days: "",
    avg_sentiment: 0
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={(e) => { e.preventDefault(); onSubmit(form); }}>
      {Object.keys(form).map((key) => (
        <input
          key={key}
          name={key}
          placeholder={key.replaceAll("_", " ")}
          onChange={handleChange}
        />
      ))}
      <button type="submit">Predict Churn</button>
    </form>
  );
}

export default ChurnForm;
