import React from 'react';

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }

  let videoSrc = `https://www.dailymotion.com/embed/video/${video.id}`;

  return (
    <div className='sticky-top'>
      <div className='embed-responsive embed-responsive-16by9 pb-3'>
        <iframe
          frameborder='0'
          src={videoSrc}
          allowfullscreen
          allow='autoplay'
          title='player'
        ></iframe>
      </div>
      <h4 className='pl-3 pt-3'>{video.title}</h4>
    </div>
  );
};

export default VideoDetail;
