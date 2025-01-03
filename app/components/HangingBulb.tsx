export default function HangingBulb() {
  return (
    <div className="bulb-container">
      <video
        src="/videos/hanging_bulb.mp4" // Ensure the video is placed in the correct location
        autoPlay
        loop
        muted
        className="bulb-video"
      />
    </div>
  );
}
