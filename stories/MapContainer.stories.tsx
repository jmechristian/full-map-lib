import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { MapContainer } from '../src';

export default {
  title: 'Map Container',
  component: MapContainer,
} as ComponentMeta<typeof MapContainer>;

const Template: ComponentStory<typeof MapContainer> = args => (
  <MapContainer {...args} />
);

export const Default = Template.bind({});

Default.args = {
  api_key:
    'pk.eyJ1IjoiYWRnLWJyYW5kaW5nIiwiYSI6ImNsM3czZ3IwZDBuaGYzYm8yemcwdWFlMGgifQ.2378CUUNBJppYXdD1c5aHg',
  allPins: [
    {
      id: 659,
      attributes: {
        lat: 38.9019444,
        lng: -76.9757149,
        address: null,
        name: '1907 I St NE',
        link: 'https://adgg-v2.vercel.app/projects/8',
        description:
          'This 25 unit apartment building has an elevator to penthouse unit with terraces and views.',
        hero: {
          data: {
            id: 136,
            attributes: {
              url:
                'https://adg-projects.nyc3.digitaloceanspaces.com/d1e9f1eb4fa8d44b5af40e44d66b019c.webp',
            },
          },
        },
        department: {
          data: {
            id: 1,
            attributes: {
              name: 'Architecture',
            },
          },
        },
        subcategories: {
          data: [
            {
              id: 1,
              attributes: {
                subcategory: 'Multi-Family',
              },
            },
          ],
        },
        building_type: {
          data: {
            id: 2,
            attributes: {
              type: 'Apartment',
            },
          },
        },
      },
    },
    {
      id: 607,
      attributes: {
        lat: 38.8776974,
        lng: -76.9877302,
        address: null,
        name: '1310 L St SE',
        description: null,
        featured: null,
        link: null,
        createdAt: null,
        updatedAt: null,
        createBy: null,
        quote: null,
        quote_attribution: null,
        location: null,
        collaborators: null,
        size: null,
        grid_order: null,
        hero: {
          data: null,
        },
        department: {
          data: {
            id: 1,
            attributes: {
              name: 'Architecture',
              createdAt: '2022-06-10T09:59:34.396Z',
              updatedAt: '2022-06-22T21:03:12.788Z',
              publishedAt: '2022-06-10T09:59:35.545Z',
            },
          },
        },
        subcategories: {
          data: [],
        },
        building_type: {
          data: null,
        },
        project_types: {
          data: [],
        },
        above_quote: [],
        below_text_content: [],
        gallery: {
          data: null,
        },
      },
    },
  ],
};
