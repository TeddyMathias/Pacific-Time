import React, { useEffect } from 'react';

const LiveWidget = ({artistId, cssVersion}) => {

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://widget.seated.com/app.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, []);

  return (
    <div 
      id="seated-55fdf2c0" 
      data-artist-id={artistId} 
      data-css-version={cssVersion}>
    </div>
  );
};

export default LiveWidget;
