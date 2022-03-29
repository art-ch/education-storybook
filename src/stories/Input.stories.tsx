import { ComponentStory } from '@storybook/react';

import Input from '../components/Input';

export default {
  title: 'Components/Input',
  component: Input
};

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  inputPosition: 'beforeIcon'
};
