import { Meta, StoryFn } from "@storybook/react";
import AgeRegister, { IAgeRegister } from "./AgeRegister";
import { mockAgeRegisterProps } from "./AgeRegister.mocks";

export default {
  tags: ["autodocs"],
  title: "Molecules/AgeRegister",
  component: AgeRegister,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as Meta<typeof AgeRegister>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof AgeRegister> = (args) => (
  <AgeRegister {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockAgeRegisterProps.base,
} as IAgeRegister;
