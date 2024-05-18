import { Meta, StoryFn } from "@storybook/react";
import Placeholder, { IPlaceholder } from "./Placeholder";
import { mockPlaceholderProps } from "./Placeholder.mocks";

export default {
  tags: ["autodocs"],
  title: "Atoms/Placeholder",
  component: Placeholder,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as Meta<typeof Placeholder>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Placeholder> = (args) => (
  <Placeholder {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockPlaceholderProps.base,
} as IPlaceholder;
