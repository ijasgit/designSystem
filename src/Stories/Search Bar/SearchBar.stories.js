import SearchBar from "./SearchBar";

export default {
  title: "Search bar/Search bar",
  component: SearchBar,
  tags: ["autodocs"],
};

export const Primary = {
  args: {
    variant:"large",
    height: "32px",
    width: "333px",
    borderRadius: "4px",
    placeholder:"Search Portfolio or Product",
    fontSize:"large"
  },
};

export const Secondary = {
  
  args: {
    varient:"small",
    height: "22px",
    width: "125px",
    borderRadius: "4px",
    placeholder:"Search",
    fontSize:15,
    backgroundColor: '#f3f3f3',
  },
};
