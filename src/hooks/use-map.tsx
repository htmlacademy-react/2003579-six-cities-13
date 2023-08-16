import { useState, useEffect, useRef, MutableRefObject } from 'react';
import { Map, TileLayer } from 'leaflet';
import { Location } from '../types/accomodation-item';


function useMap(
  mapRef: MutableRefObject<HTMLElement | null>,
  selectedPoint: Location
): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef<boolean>(false);

  /*let cityCenter: Location;

  if(selectedPoint === undefined) {
     cityCenter = {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 10,
  }} else {
   cityCenter = selectedPoint.location;
  }*/

  //console.log(cityCenter);

  useEffect(() => {
    if(mapRef.current !== null && !isRenderedRef.current && selectedPoint !== undefined) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: selectedPoint.latitude,
          lng: selectedPoint.longitude,
        },
        zoom: selectedPoint.zoom
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
