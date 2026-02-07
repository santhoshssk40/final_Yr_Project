import SentimentKPIs from "./SentimentKPIs";
import SentimentTrend from "./SentimentTrend";
import SentimentDistribution from "./SentimentDistribution";
import TopThemes from "./TopThemes";
import WordFrequency from "./WordFrequency";

export default function SentimentOverview() {
  return (
    <>
      <SentimentKPIs />
      <SentimentTrend />
      <SentimentDistribution />
      <TopThemes />
      <WordFrequency />
    </>
  );
}
