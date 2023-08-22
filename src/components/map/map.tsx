import cn from 'classnames';
import { useRef, useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import {Icon, Marker, layerGroup} from 'leaflet';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../../const';
import useMap from '../../hooks/use-map';
import { AccomodationListItem} from '../../types/accomodation-item';
import { MapRole } from '../../const';

type MapProps = {
  points: AccomodationListItem[];
  selectedPointId: string | undefined;
  role: MapRole;
  city: string;
}

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

function sliceOffersArr(arr:AccomodationListItem[], role: MapRole) {
  if(role === MapRole.OfferPageMap) {
    return arr.slice(0,3);
  }
  return arr;
}

function Map(props: MapProps) : JSX.Element {
  const {role, city} = props;

  const points = sliceOffersArr(props.points, role);

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);

      points.forEach((point) => {
        const marker = new Marker({
          lat: point.location.latitude,
          lng: point.location.longitude
        });

        marker
          .setIcon(
            point.id === props.selectedPointId
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, points, props.selectedPointId]);

  return (
    <section
      className={cn('map',
        {'cities__map' : role === MapRole.MainPageMap},
        {'offer__map' : role === MapRole.OfferPageMap},
      )}

      ref={mapRef}
    >
    </section>
  );
}

export default Map;
