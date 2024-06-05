// src/components/HoverVideo.tsx
import { useRef } from "react";
import "./HoverVideo.css"; // Import the CSS file

interface HoverVideoProps {
  src: string;
  width?: string;
  height?: string;
}

const HoverVideo = ({
  src,
  width = "320px",
  height = "240px",
}: HoverVideoProps): JSX.Element => {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div
      className="hover-video"
      style={{ width, height }}
      onMouseEnter={() => videoRef.current?.play()}
      onMouseLeave={() => {
        if (videoRef.current) {
          videoRef.current.pause();
          videoRef.current.currentTime = 0; // Optional: Reset video to start
        }
      }}
    >
      <video ref={videoRef} src={src} loop muted />
    </div>
  );
};

export default HoverVideo;
