import Buttons from "./Buttons";

export default {
    title: "Buttons/Button",
    component: Buttons,
    tags: ["autodocs"],
  };
  
  export const Primary = {
    args: {
      variant: "primary",
      label:"Primary Button",

  
    },
  };
  export const PrimaryDiable = {
    args: {
      variant: "primaryDisabled",
      label:"Primary Button",
  
  
    },
  };

  export const Secondary = {
    args: {
      variant: "secondary",
      label:"Secondary Button"
  
    },
  };
  export const SecondaryDisable = {
    args: {
      variant: "secondaryDisabled",
      label:"Secondary Button"
  
    },
  };