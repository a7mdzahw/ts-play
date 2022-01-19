import React from "react";
import styled from "@emotion/styled";

interface Props {
  id: string;
  label: string;
  [key: string]: string;
}

const Input: React.FC<Props> = ({ id, label, ...props }) => {
  console.log(props);
  return (
    <Wrapper>
      <label htmlFor={id}>{label}</label>
      <InputMe type="text" id={id} name={id} {...props} />
    </Wrapper>
  );
};

const Wrapper = styled.div({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "16px",
});
const InputMe = styled.input({
    padding:16,
    background:"#eee",
    outline:"none",
    border:"1px solid black",
    borderRadius:"0.5rem"
})

export default Input;
