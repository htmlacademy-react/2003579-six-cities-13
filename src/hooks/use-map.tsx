import { useState, useEffect, useRef, MutableRefObject } from 'react';
import { Map, TileLayer } from 'leaflet';
import { mockCities } from '../mocks/mock-city';

function useMap(
  mapRef: MutableRefObject<HTMLElement | null>,
  city: string
): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef<boolean>(false);

  const centerPoint = mockCities.find((cityItem) => cityItem.name === city);

  useEffect(() => {

    if(mapRef.current !== null && !isRenderedRef.current && centerPoint !== undefined) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: centerPoint.location.latitude,
          lng: centerPoint.location.longitude,
        },
        zoom: centerPoint.location.zoom
      });

      const tiles = new TileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
      });

      instance.addLayer(tiles);

      setMap(instance);
      isRenderedRef.current = true;
    }

  }, [mapRef, centerPoint]);

  useEffect(() => {
    if (map && centerPoint?.location.latitude && centerPoint?.location.longitude) {
      map.setView({
        lat: centerPoint.location.latitude,
        lng: centerPoint.location.longitude,
      });
    }
  }, [centerPoint]);

  return map;
}

export default useMap;
