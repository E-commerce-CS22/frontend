import { Button } from "@mui/material";
import React, { useState } from "react";
import { FieldsTypes } from "../Filter";
import CustomDialog from "./CustomDialog.component";
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Custom Dialog",
  component: CustomDialog,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    variant: { control: "variant" },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleModalToggle = () => {
    setIsOpen(!isOpen);
  };
  const handleSubmitFilters = (data) => {
    console.log(data);
    // setIsOpen(!isOpen);
  };
  const filterFields = [
    {
      id: "first",
      Grid: 12,
      type: FieldsTypes.input,
      fieldProps: {
        placeholder: "Admin:defaultLabel",
        label: "Admin:defaultLabel",
        name: "search",
        defaultValue: "",
      },
    },
  ];
  return (
    <CustomDialog
      open={isOpen}
      onCloseModal={setIsOpen}
      button={<Button onClick={handleModalToggle}>Button</Button>}
      onReset={handleModalToggle}
      onConfirm={handleSubmitFilters}
      fields={filterFields}
      {...args}
    ></CustomDialog>
  );
};

export const PaperScroll = Template.bind({});
export const BodyScroll = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

PaperScroll.args = {
  scrollType: "paper",
  label: "Content Scroll",
  title: "Content Scroll",
};

BodyScroll.args = {
  scrollType: "body",
  label: "Body Scroll",
  title: "Body Scroll",
};
