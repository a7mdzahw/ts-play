import styled from "@emotion/styled";
import { Link as DomLink } from "react-router-dom";

type Size = "huge" | "small"

interface Props {
  to: string;
  children: JSX.Element | string;
  className?:string,
  size?:Size
}

interface StylesProps {
    size:Size
}


const Link = ({ to, children,className ="",size="small" }: Props) => {
  return <StyledLink className={className} size={size} to={to}> {children} {"=>"} </StyledLink>;
};

const StyledLink = styled(DomLink)<StylesProps>`
display:flex;
flex: 1;
align-items:center;
background-color: bisque;
justify-content: space-between;
text-decoration:none;
padding: 3px 20px;
font-size: ${props => props.size === "huge" ? "64px" : "16px" };;
min-height: 50px;
gap:16px;
color:black;
&:hover {
    color:red;
}
`

export default Link;
