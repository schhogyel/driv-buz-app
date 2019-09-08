import React, { useEffect, useRef } from 'react';

declare global {
  interface Window {
    google: any;
  }
}
window.google = window.google || {};

export default function Map({ options, onMount }: any) {
  const googleMapRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const map = new window.google.maps.Map(googleMapRef.current, options);
    onMount && onMount(map);
  }, [options, onMount]);

  return <div ref={googleMapRef} style={{ height: '250px', margin: '1rem' }} />;
}

Map.defaultProps = {
  options: {
    center: { lat: -27.462272, lng: 153.008473 },
    zoom: 15
  }
};
