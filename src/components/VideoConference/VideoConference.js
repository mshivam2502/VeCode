import React, { useRef, useState } from 'react';
import './VideoConference.css';

function VideoConference() {
  const videoRef = useRef(null);
  const [isScreenSharing, setIsScreenSharing] = useState(false);

  const startVideoCall = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      videoRef.current.srcObject = stream;
      videoRef.current.play();
    } catch (error) {
      console.error('Error starting video call:', error);
    }
  };

  const startScreenShare = async () => {
    try {
      const stream = await navigator.mediaDevices.getDisplayMedia({ video: true });
      videoRef.current.srcObject = stream;
      setIsScreenSharing(true);
    } catch (error) {
      console.error('Error starting screen share:', error);
    }
  };

  const stopScreenShare = () => {
    const tracks = videoRef.current.srcObject.getTracks();
    tracks.forEach(track => track.stop());
    videoRef.current.srcObject = null;
    setIsScreenSharing(false);
  };

  const togglePictureInPicture = () => {
    if (document.pictureInPictureElement) {
      document.exitPictureInPicture();
    } else if (videoRef.current) {
      videoRef.current.requestPictureInPicture();
    }
  };

  return (
    <div className="video-conference">
      <h2>Video Conference</h2>
      <video ref={videoRef} className="video" />
      <div className="controls">
        <button onClick={startVideoCall}>Start Video Call</button>
        {isScreenSharing ? (
          <button onClick={stopScreenShare}>Stop Screen Share</button>
        ) : (
          <button onClick={startScreenShare}>Start Screen Share</button>
        )}
        <button onClick={togglePictureInPicture}>Toggle PiP</button>
      </div>
    </div>
  );
}

export default VideoConference;
