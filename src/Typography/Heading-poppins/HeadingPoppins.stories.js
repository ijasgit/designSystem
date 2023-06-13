import HeadingPoppins from "./HeadingPoppins";
// import poppins from "url(https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,600;1,100&display=swap)" 


export default {
  title: "Typography/Heading-poppins",
  component: HeadingPoppins,
  tags: ["autodocs"],
};

export const Primary = {
  args: {
    variant: "primary",
    fontSize: 24,
    letterSpacing: 0,
    lineHeight: "auto",
    label: "Heading-Poppins",
    fontFamily: 'Poppins',
    fontWeight: 600,
  },
};
