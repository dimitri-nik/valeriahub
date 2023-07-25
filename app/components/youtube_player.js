import React from "react";
import YouTube from "react-youtube";

const YoutubePlayer = ({ videoId, containerClassName }) => {
  const playerHeight = 360;
  const playerMaxWidth = "640";

  return ( 
    <div style={{ maxWidth: playerMaxWidth, width: "100%"}}>
      <YouTube videoId={videoId} opts={{ height: playerHeight, width: "100%" }} />
    </div>
  )
};

export default YoutubePlayer;