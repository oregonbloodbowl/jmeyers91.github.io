import React from 'react';

export default function YouTube({ videoId }) {
  return (
    <iframe allowFullScreen
      width="560"
      height="315"
      src={`https://www.youtube.com/embed/${videoId}`}
      frameBorder="0"
      allow="autoplay; encrypted-media"
    />
  );
}
