import { Meta, StoryFn } from "@storybook/react";
import NameRegister, { INameRegister } from "./NameRegister";
import { mockNameRegisterProps } from "./NameRegister.mocks";

export default {
  tags: ["autodocs"],
  title: "Molecules/NameRegister",
  component: NameRegister,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as Meta<typeof NameRegister>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof NameRegister> = (args) => (
  <NameRegister {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockNameRegisterProps.base,
} as INameRegister;
