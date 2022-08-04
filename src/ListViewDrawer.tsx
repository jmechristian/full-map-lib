import React from 'react';
import { Place } from './MapContainer';
import { ListViewItem } from './ListViewItem';
import _ from 'lodash';
import useMediaQuery from 'beautiful-react-hooks/useMediaQuery';
import { XCircleIcon } from '@heroicons/react/solid';

interface ProjectProps {
  projects: Place[];
  map: any;
  drawerHandler: () => void;
  setPlace: any;
}

export const ListViewDrawer = ({
  projects,
  map,
  drawerHandler,
  setPlace,
}: ProjectProps) => {
  const sortedPins = _.orderBy(
    projects,
    [c => c.attributes.name, 'name'],
    ['asc']
  );

  const flyToMarker = (p: any) => {
    drawerHandler();
    map.flyTo({
      center: [p.attributes.lng, p.attributes.lat],
      zoom: 14,
      duration: 2000,
      offset: isMobile ? [0, 200] : [0, 80],
      pitch: 70,
      bearing: 0,
      essential: true,
      curve: 0.7,
      easing: function(t: any) {
        return 1 - Math.pow(1 - t, 5);
      },
    });
    setPlace(p);
  };

  const isMobile = useMediaQuery('(max-width: 500px)');

  return (
    <div className="w-3/4 md:w-1/3 bg-white shadow-lg absolute left-0 top-0 z-50 h-full">
      <div className="py-4 px-6 flex-col">
        <div className="flex justify-between">
          <div className="font-medium text-xl mb-6 text-slate-900">
            ADG+G Projects &#40;{projects.length}&#41;
          </div>
          <div onClick={drawerHandler} className="cursor-pointer">
            <XCircleIcon className="w-6 h-6 fill-slate-800" />
          </div>
        </div>
        <div>
          {sortedPins.map((p, index) => (
            <div
              key={index}
              onClick={() => flyToMarker(p)}
              className="cursor-pointer"
            >
              <ListViewItem name={p.attributes.name} link={p.attributes.link} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
