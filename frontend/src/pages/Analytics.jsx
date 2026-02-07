import { motion } from "framer-motion";

import SentimentKPIs from "../components/sentiment/SentimentKPIs";
import SentimentTrend from "../components/sentiment/SentimentTrend";
import ChannelDonuts from "../components/sentiment/ChannelDonuts";
import TopThemes from "../components/sentiment/TopThemes";
import WordFrequency from "../components/sentiment/WordFrequency";

export default function Analytics() {
  return (
    <div className="space-y-10">

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <SentimentKPIs />
      </motion.div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        <SentimentTrend />
        <ChannelDonuts />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        <TopThemes />
        <WordFrequency />
      </div>

    </div>
  );
}
