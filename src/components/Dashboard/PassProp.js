import { ToggleModal } from "./Modal";

export const setLoginModalShow = (props) => {
  console.log("PROPS", props);
  return <ToggleModal showModal={props} />;
};
