import { ModalChart } from "./ModalChart";

export const setLoginModalShow = (props) => {
  console.log("PROPS", props);
  return <ModalChart showModal={props} />;
};
