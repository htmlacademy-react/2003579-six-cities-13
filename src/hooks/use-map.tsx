import { useState, useEffect, useRef, MutableRefObject } from 'react';
import { Map, TileLayer } from 'leaflet';
import { AccomodationListItem } from '../types/accomodation-item';


function useMap(
  mapRef: MutableRefObject<HTMLElement | null>,
  selectedPoint: AccomodationListItem
): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef<boolean>(false);

  useEffect(() => {
    if(mapRef.current !== null && !isRenderedRef.current) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: selectedPoint.location.latitude,
          lng: selectedPoint.location.longitude,
        },
        zoom: selectedPoint.location.zoom
      });

      const tiles = new TileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
      });

      instance.addLayer(tiles);

      setMap(instance);
      isRenderedRef.current = true;
    }

  }, [mapRef, selectedPoint]);

  return map;
}

export default useMap;
