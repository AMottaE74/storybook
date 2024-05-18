import { Meta, StoryFn } from "@storybook/react";
import DataRegister, { IDataRegister } from "./DataRegister";
import { mockDataRegisterProps } from "./DataRegister.mocks";

export default {
  tags: ["autodocs"],
  title: "Organisms/DataRegister",
  component: DataRegister,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as Meta<typeof DataRegister>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof DataRegister> = (args) => (
  <DataRegister {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockDataRegisterProps.base,
} as IDataRegister;
