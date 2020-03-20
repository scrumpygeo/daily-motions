import React from 'react';

const VideoItem = ({ video }) => {
  console.log(video);
  return (
    <div className='d-flex align-items-center' style={{ cursor: 'pointer' }}>
      <img
        src={video.thumbnail_url}
        alt='video.title'
        width={'180px'}
        className='mb-3'
      />
      <div className='mx-3 pl-2'>
        <p>{video.title}</p>
      </div>
    </div>
  );
};

export default VideoItem;
