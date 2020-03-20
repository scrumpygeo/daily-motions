import React from 'react';

const VideoList = ({ videos }) => {
  //   console.log(props.videos);
  const renderedList = videos.map(video => {
    return <div>{video.title}</div>;
  });

  return (
    <ul clasNames='list-group mb-5'>
      <li clasNames='list-group-item'>{renderedList}</li>
    </ul>
  );
};

export default VideoList;
