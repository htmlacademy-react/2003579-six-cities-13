import cn from 'classnames';
import { useRef, useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import {Icon, Marker, layerGroup} from 'leaflet';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../../const';
import useMap from '../../hooks/use-map';
import { AccomodationListItem, Location } from '../../types/accomodation-item';
import { MapRole } from '../../const';
import { mockCities } from '../../mocks/mock-city';
import { Cities } from '../../const';

type MapProps = {
  points: AccomodationListItem[];
  selectedPointId: string | undefined;
  role: MapRole;
  city: Cities;
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

function assignSelectedPoint(selectedPointId: string | undefined, points: AccomodationListItem[], city: string) {
  if(selectedPointId !== undefined) {
    return points.find((point) => point.id === selectedPointId);
  }

  if(points[0] !== undefined) {
    return points[0].location;
  }

  const cityCenter = mockCities.find((element) => element.name === city)?.location;

  return cityCenter;
}

function Map(props: MapProps) : JSX.Element {
  const {role, city} = props;
  const selectedPoint = assignSelectedPoint(props.selectedPointId, props.points, city) as Location;

  const points = sliceOffersArr(props.points, role);

  const mapRef = useRef(null);
  const map = useMap(mapRef, selectedPoint);

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
            selectedPoint !== undefined && point.id === selectedPoint.id
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, points, selectedPoint]);

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
