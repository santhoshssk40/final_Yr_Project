export const mockKPIs = {
  totalCustomers: 12450,
  totalCustomersChange: 8.2,
  atRiskCustomers: 1876,
  atRiskCustomersChange: -3.5,
  churnRate: 15.1,
  churnRateChange: -2.1,
  mrr: 524800,
  mrrChange: 12.4,
};

export const churnRiskGaugeData = [
  { name: 'Risk', value: 42, fill: '#ef4444' },
];

export const churnRiskDistribution = [
  { range: '0-0.1', count: 2840, fill: '#22c55e' },
  { range: '0.1-0.2', count: 2450, fill: '#86efac' },
  { range: '0.2-0.3', count: 1980, fill: '#4ade80' },
  { range: '0.3-0.4', count: 1520, fill: '#eab308' },
  { range: '0.4-0.5', count: 1180, fill: '#facc15' },
  { range: '0.5-0.6', count: 890, fill: '#fbbf24' },
  { range: '0.6-0.7', count: 680, fill: '#f87171' },
  { range: '0.7-0.8', count: 490, fill: '#ef4444' },
  { range: '0.8-0.9', count: 280, fill: '#dc2626' },
  { range: '0.9-1.0', count: 140, fill: '#b91c1c' },
];

export const churnBySegment = [
  { segment: 'Low Value / Price Sensitive', churnRisk: 68, customers: 3200, fill: '#ef4444' },
  { segment: 'Discount Driven', churnRisk: 52, customers: 4800, fill: '#facc15' },
  { segment: 'High Value / Quality Focused', churnRisk: 18, customers: 4450, fill: '#22c55e' },
];

export const highRiskCustomers = [
  {
    id: 1,
    name: 'Acme Corporation',
    customerId: 'CUST-1042',
    churnRisk: 87,
    causes: ['Decreasing usage', 'Support tickets'],
    recommendation: 'Schedule executive review call',
  },
  {
    id: 2,
    name: 'TechStart Inc',
    customerId: 'CUST-2156',
    churnRisk: 82,
    causes: ['Price sensitivity', 'Competitor evaluation'],
    recommendation: 'Offer loyalty discount',
  },
  {
    id: 3,
    name: 'Global Solutions Ltd',
    customerId: 'CUST-3421',
    churnRisk: 79,
    causes: ['Feature gaps', 'Integration issues'],
    recommendation: 'Product demo of new features',
  },
  {
    id: 4,
    name: 'Innovation Labs',
    customerId: 'CUST-1893',
    churnRisk: 76,
    causes: ['Low engagement', 'No executive sponsor'],
    recommendation: 'Assign dedicated CSM',
  },
  {
    id: 5,
    name: 'Enterprise Systems Co',
    customerId: 'CUST-4782',
    churnRisk: 74,
    causes: ['Budget constraints', 'ROI concerns'],
    recommendation: 'Present value analysis report',
  },
  {
    id: 6,
    name: 'Digital Ventures',
    customerId: 'CUST-2947',
    churnRisk: 71,
    causes: ['Migration planning', 'Contract expiring'],
    recommendation: 'Renewal negotiation',
  },
  {
    id: 7,
    name: 'Smart Systems LLC',
    customerId: 'CUST-5631',
    churnRisk: 69,
    causes: ['User complaints', 'Performance issues'],
    recommendation: 'Technical health check',
  },
  {
    id: 8,
    name: 'CloudTech Partners',
    customerId: 'CUST-3184',
    churnRisk: 67,
    causes: ['Reduced usage', 'Team turnover'],
    recommendation: 'Re-onboarding session',
  },
];

export const sentimentOverview = {
  overallScore: 3.71,
  totalFeedback: 1000,
  positive: 600,
  neutral: 300,
  negative: 100,
};

export const sentimentBreakdown = [
  { name: 'Positive', value: 60, count: 600, fill: '#22c55e' },
  { name: 'Neutral', value: 30, count: 300, fill: '#eab308' },
  { name: 'Negative', value: 10, count: 100, fill: '#ef4444' },
];

export const sentimentTrend = [
  { date: 'Jan 18', positive: 45, neutral: 35, negative: 20, score: 3.2 },
  { date: 'Jan 22', positive: 50, neutral: 32, negative: 18, score: 3.4 },
  { date: 'Jan 26', positive: 55, neutral: 30, negative: 15, score: 3.6 },
  { date: 'Jan 30', positive: 58, neutral: 28, negative: 14, score: 3.7 },
  { date: 'Feb 3', positive: 60, neutral: 27, negative: 13, score: 3.75 },
  { date: 'Feb 7', positive: 62, neutral: 26, negative: 12, score: 3.8 },
  { date: 'Feb 11', positive: 65, neutral: 24, negative: 11, score: 3.85 },
  { date: 'Feb 15', positive: 68, neutral: 22, negative: 10, score: 3.9 },
];

export const sentimentByChannel = [
  { channel: 'Email', positive: 65, neutral: 25, negative: 10, total: 400 },
  { channel: 'Chat', positive: 60, neutral: 28, negative: 12, total: 300 },
  { channel: 'Social Media', positive: 55, neutral: 30, negative: 15, total: 300 },
];

export const wordFrequency = [
  { word: 'Positive', count: 120, sentiment: 'positive', fill: '#22c55e' },
  { word: 'Helpful', count: 105, sentiment: 'positive', fill: '#22c55e' },
  { word: 'Anticipation', count: 95, sentiment: 'positive', fill: '#22c55e' },
  { word: 'Fast', count: 88, sentiment: 'positive', fill: '#22c55e' },
  { word: 'Excellent', count: 82, sentiment: 'positive', fill: '#22c55e' },
  { word: 'Negative', count: 68, sentiment: 'negative', fill: '#ef4444' },
  { word: 'Slow', count: 52, sentiment: 'negative', fill: '#ef4444' },
  { word: 'Anger', count: 34, sentiment: 'negative', fill: '#ef4444' },
  { word: 'Fear', count: 28, sentiment: 'negative', fill: '#ef4444' },
  { word: 'Surprise', count: 18, sentiment: 'neutral', fill: '#eab308' },
];

export const geographicChurn = [
  { region: "USA", lat: 37.09, lng: -95.71, risk: "high", churnRisk: 72 },
  { region: "India", lat: 20.59, lng: 78.96, risk: "medium", churnRisk: 45 },
  { region: "UK", lat: 55.37, lng: -3.43, risk: "low", churnRisk: 22 },
  { region: "Germany", lat: 51.16, lng: 10.45, risk: "medium", churnRisk: 41 },
  { region: "Brazil", lat: -14.23, lng: -51.92, risk: "high", churnRisk: 66 }
];
