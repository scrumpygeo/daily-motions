import React from 'react';

const VideoItem = ({ video }) => {
  // console.log(video);
  return (
    <div className='card' style={{ cursor: 'pointer' }}>
      <img
        src={video.thumbnail_url}
        alt={video.title}
        width={'180px'}
        className='card-img-top img-fluid'
      />
      <div className='card-body'>
        <p>{video.title}</p>
      </div>
    </div>
  );
};

export default VideoItem;
