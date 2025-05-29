import { ChildAsFC } from "./Child";

const Parent = () => {
  return (
    <ChildAsFC color="red" onClick={() => console.log("clicked")}>
      Hello
    </ChildAsFC>
  );
};

export default Parent;
