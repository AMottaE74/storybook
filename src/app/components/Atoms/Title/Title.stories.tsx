import { Meta, StoryFn } from "@storybook/react";
import Title, { ITitle } from "./Title";
import { mockTitleProps } from "./Title.mocks";

export default {
  tags: ["autodocs"],
  title: "Atoms/Title",
  component: Title,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as Meta<typeof Title>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Title> = (args) => <Title {...args} />;

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockTitleProps.base,
} as ITitle;
