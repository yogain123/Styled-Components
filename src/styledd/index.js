import styled from "styled-components";

export const H1 = styled.h1`
  color: ${(props) => props.theme.primary};
  &:hover {
    background: ${(props) => props.theme.warning};
  }
`;

export const Button = styled.button`
  color: rgb(255, 255, 255);
  font-size: 16px;
  line-height: 16px;
  padding: 6px;
  border-radius: 11px;
  font-family: Georgia, serif;
  font-weight: normal;
  text-decoration: none;
  font-style: normal;
  font-variant: normal;
  text-transform: none;
  background-image: linear-gradient(
    to right,
    rgb(28, 110, 164) 0%,
    rgb(35, 136, 203) 50%,
    rgb(20, 78, 117) 100%
  );
  box-shadow: rgb(0, 0, 0) 5px 5px 15px 5px;
  border: 2px solid rgb(28, 110, 164);
  display: inline-block;
  &:hover {
      background: ${(props) => props.hoverColor || "yellow"}
  }
  &:active {
    background: ${(props) => (props.activeColor ? props.activeColor : "pink")};
  },
`;
