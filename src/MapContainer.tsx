import React, { useState, useRef, useMemo } from 'react';
import Map, { NavigationControl, Marker, Popup } from 'react-map-gl';
import { MarkerPin } from './MarkerPin';
import { ListViewButton } from './ListViewButton';
import { CloseButton } from './CloseButton';
import { ResetButton } from './ResetButton';
import { PopupArch } from './PopupArch';
import { ListViewDrawer } from './ListViewDrawer';

export interface SubCategory {
  id: number;
  attributes: {
    subcategory: string;
  };
}

export interface Place {
  id: number;
  attributes: {
    lat: number;
    lng: number;
    address: string | null | undefined;
    name: string;
    description: string;
    link: string | null | undefined;
    hero: {
      data?: null | {
        id: number;
        attributes: {
          url: string | null | undefined;
        };
      };
    };
    department: {
      data: {
        id: number;
        attributes: {
          name: string;
        };
      };
    };
    subcategories: {
      data: SubCategory[] | null | undefined;
    };
    building_type: {
      data: null | {
        id: number;
        attributes: {
          type: string;
        };
      };
    };
  };
}

export interface MapProps {
  api_key: string;
  allPins: Place[];
  closeMap: () => void;
}

const initialView = {
  longitude: -77.0307193335218,
  latitude: 38.87225889119998,
  zoom: 12,
  pitch: 70,
};

export const MapContainer = ({ api_key, allPins, closeMap }: MapProps) => {
  const mapRef = useRef<any>({});
  const [viewState, setViewState] = useState(initialView);
  const [place, setPlace] = useState<Place | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const pins = useMemo(
    () =>
      allPins.map(p => (
        <Marker
          longitude={p.attributes.lng}
          latitude={p.attributes.lat}
          key={p.id}
          anchor="bottom"
          onClick={e => {
            // If we let the click event propagates to the map, it will immediately close the popup
            // with `closeOnClick: true`
            e.originalEvent.stopPropagation();
            setPlace(p);
            mapRef.current.flyTo({
              center: [p.attributes.lng, p.attributes.lat],
              zoom: 14,
              duration: 1500,
              offset: [0, 100],
              pitch: 70,
              bearing: 0,
              essential: true,
              curve: 0.7,
              easing: function(t: any) {
                return 1 - Math.pow(1 - t, 5);
              },
            });
          }}
        >
          <MarkerPin />
        </Marker>
      )),
    [allPins]
  );

  const resetCamera = () => {
    setViewState(initialView);
  };

  const closeMapHandler = () => {
    closeMap();
  };

  const drawerHandler = () => {
    setDrawerOpen(prevState => !prevState);
  };

  return (
    <div className="w-full h-screen relative">
      {drawerOpen && (
        <ListViewDrawer
          projects={allPins}
          map={mapRef.current}
          drawerHandler={drawerHandler}
          setPlace={setPlace}
        />
      )}
      <div className="absolute top-3 right-3 z-50 flex flex-col md:flex-row">
        <div className="mb-2 md:mb-0 md:mr-4">
          <ListViewButton
            width="20px"
            height="20px"
            fontSize="16px"
            onClick={drawerHandler}
          />
        </div>
        <div className="mb-2 md:mb-0 md:mr-4">
          <ResetButton
            width="20px"
            height="20px"
            fontSize="16px"
            onClick={resetCamera}
          />
        </div>
        <CloseButton
          width="18px"
          height="18px"
          fontSize="16px"
          onClick={closeMapHandler}
        />
      </div>
      <Map
        initialViewState={{
          longitude: -77.0307193335218,
          latitude: 38.87225889119998,
          zoom: 12,
          pitch: 70,
        }}
        {...viewState}
        mapStyle="mapbox://styles/adg-branding/cl47jmywy003p15rmjzucu62i"
        mapboxAccessToken={api_key}
        ref={mapRef}
        onMove={event => setViewState(event.viewState)}
      >
        <NavigationControl position="bottom-right" />
        {pins}
        {place && (
          <Popup
            anchor="bottom"
            longitude={place.attributes.lng}
            latitude={place.attributes.lat}
            onClose={() => setPlace(null)}
            offset={40}
            focusAfterOpen={false}
            maxWidth="none"
          >
            <PopupArch
              name={place.attributes.name}
              hero={
                place.attributes.hero.data &&
                place.attributes.hero.data.attributes.url
              }
              department={place.attributes.department.data.attributes.name}
              subcategory={
                place.attributes.subcategories.data &&
                place.attributes.subcategories.data
              }
              building_type={
                place.attributes.building_type &&
                place.attributes.building_type.data?.attributes.type
              }
              description={
                place.attributes.description && place.attributes.description
              }
              link={place.attributes.link && place.attributes.link}
            />
          </Popup>
        )}
      </Map>
    </div>
  );
};
