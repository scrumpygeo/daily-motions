import React from 'react';

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }

  let videoSrc = `https://www.dailymotion.com/embed/video/${video.id}`;

  return (
    <div>
      <div class='embed-responsive embed-responsive-16by9'>
        <iframe
          frameborder='0'
          src={videoSrc}
          allowfullscreen
          allow='autoplay'
        ></iframe>
      </div>
    </div>
  );
};

export default VideoDetail;
