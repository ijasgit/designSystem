import TextFields from "./TextFields";

export default {
  title: "Text fields/Text Fields",
  component: TextFields,
  tags: ["autodocs"],
  argTypes: { onClick: { action: 'clicke' } },
};

export const primaryCard = {
  args: {
    label: "Select Region",
    height: "32px",
    width: "375px",
    borderRadius:"4px",
    placeholder:"",
    options:[{}],
    onClick:"",
    id:""
  },
};
