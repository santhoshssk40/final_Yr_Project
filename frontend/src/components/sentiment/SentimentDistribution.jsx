import ChannelDonuts from "./ChannelDonuts";
export default function SentimentDistribution() {
  return (
    <div className="grid md:grid-cols-3 gap-6 mb-8">
      <ChannelDonuts title="Email" />
      <ChannelDonuts title="Chat" />
      <ChannelDonuts title="Social Media" />
    </div>
  );
}
