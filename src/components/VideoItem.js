import React from 'react';

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div
      className='card'
      style={{ cursor: 'pointer' }}
      onClick={() => {
        onVideoSelect(video);
      }}
    >
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
