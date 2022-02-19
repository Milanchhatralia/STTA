import { useEffect, useRef } from 'react';

import { mapIframeSrc } from '../utils/Maps';

type IMapProps = {
  height?: string;
  width?: string;
  allowFullScreen?: boolean;
};

const Map = (props: IMapProps) => {
  const mapContainer = useRef();
  useEffect(() => {
    const frame: HTMLIFrameElement = document.createElement('iframe');
    frame.src = mapIframeSrc;
    frame.width = props.width || '100%';
    frame.height = props.height;
    frame.loading = 'lazy';
    frame.allowFullScreen = props.allowFullScreen;
    mapContainer.current.appendChild(frame);
  }, []);

  return <div ref={mapContainer} />;
};

export { Map };
