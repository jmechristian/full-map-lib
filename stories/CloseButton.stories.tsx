import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CloseButton } from '../src';

export default {
  title: 'Close Button',
  component: CloseButton,
} as ComponentMeta<typeof CloseButton>;

const Template: ComponentStory<typeof CloseButton> = args => (
  <CloseButton {...args} />
);

export const Default = Template.bind({});

Default.args = {
  width: '20px',
  height: '20px',
  fontSize: '16px',
};
