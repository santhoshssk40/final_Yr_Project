const API_URL = "http://127.0.0.1:8000";

// -------------------- OVERVIEW --------------------
export const getStats = async () => {
  const res = await fetch(`${API_URL}/stats`);
  return res.json();
};

// -------------------- CHURN --------------------
export const getChurnDistribution = async () => {
  const res = await fetch(`${API_URL}/churn/distribution`);
  return res.json();
};

export const getChurnSegments = async () => {
  const res = await fetch(`${API_URL}/churn/segments`);
  return res.json();
};

export const getHighRiskCustomers = async () => {
  const res = await fetch(`${API_URL}/churn/high-risk`);
  return res.json();
};

export const getGeographicChurn = async () => {
  const res = await fetch(`${API_URL}/churn/geography`);
  return res.json();
};

// -------------------- SENTIMENT --------------------
export const getSentimentOverview = async () => {
  const res = await fetch(`${API_URL}/sentiment/summary`);
  const d = await res.json();

  return {
    overallScore: d.avg_sentiment ?? 0,
    totalFeedback: 1, // prevents division by zero UI break
    positive_pct: d.positive_pct,
    neutral_pct: d.neutral_pct,
    negative_pct: d.negative_pct,
  };
};

export const getSentimentBreakdown = async () => {
  const res = await fetch(`${API_URL}/sentiment/summary`);
  const d = await res.json();

  return [
    {
      name: "Positive",
      value: d.positive_pct,
      count: d.positive_pct,
      fill: "#22c55e",
    },
    {
      name: "Neutral",
      value: d.neutral_pct,
      count: d.neutral_pct,
      fill: "#eab308",
    },
    {
      name: "Negative",
      value: d.negative_pct,
      count: d.negative_pct,
      fill: "#ef4444",
    },
  ];
};

export const getSentimentTrend = async () => {
  const res = await fetch(`${API_URL}/sentiment/trends`);
  if (!res.ok) throw new Error("Failed to fetch sentiment trends");
  return res.json();
};


export const getSentimentByChannel = async () => {
  const res = await fetch(`${API_URL}/sentiment/channels`);
  return res.json();
};

export const getWordFrequency = async () => [
  { word: "delay", count: 120 },
  { word: "support", count: 95 },
  { word: "refund", count: 74 },
  { word: "quality", count: 62 },
  { word: "price", count: 50 },
];

// -------------------- PREDICTION --------------------
export const predictChurn = async (payload) => {
  const res = await fetch(`${API_URL}/predict/churn`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  return res.json();
};

export const explainPrediction = async () => {
  const res = await fetch(`${API_URL}/predict/explain`);
  return res.json();
};
