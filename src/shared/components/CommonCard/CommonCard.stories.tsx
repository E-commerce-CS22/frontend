import CommonCard from "./CommonCard.component";
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Common Card",
  component: CommonCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    variant: { control: "variant" },
  },
};
const Template = args => <CommonCard {...args} />;

export const CommonCardComponent = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
