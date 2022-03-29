import { ComponentStory } from '@storybook/react';

import Button from '../components/Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    size: { options: ['sm', 'md', 'lg'], control: { type: 'radio' } },
    handleClick: { action: 'handleClick' }
  }
};

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const SeaGreen = Template.bind({});
SeaGreen.args = {
  backgroundColor: 'seagreen',
  label: 'Press Me',
  size: 'md'
};

export const RoseGold = Template.bind({});
RoseGold.args = {
  backgroundColor: '#B76E79',
  label: 'Press Me',
  size: 'md'
};

export const Small = Template.bind({});
Small.args = {
  backgroundColor: '#B76E79',
  label: 'Press Me',
  size: 'sm'
};

export const Large = Template.bind({});
Large.args = {
  backgroundColor: '#B76E79',
  label: 'Press Me',
  size: 'lg'
};

export const LongLabel = Template.bind({});
LongLabel.args = {
  backgroundColor: '#B76E79',
  label:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci assumenda impedit, aliquam eius amet enim.',
  size: 'lg'
};
