import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos }) => {
  const renderedList = videos.map(video => {
    return <VideoItem key={video.id} video={video} />;
  });

  return (
    <div>
      {renderedList && (
        <ul className='list-group mb-5'>
          <li className='list-group-item '>{renderedList}</li>
        </ul>
      )}
    </div>
  );
};

export default VideoList;
