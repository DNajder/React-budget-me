import React from 'react';
import styled, {keyframes} from "styled-components";

const rotate = keyframes`
 0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

const Root = styled.div`
 display: inline-block;
  width: 80px;
  height: 80px;
`;

const Content = styled.div`
  content: " ";
  display: block;
  width: 64px;
  height: 64px;
  margin: 8px;
  border-radius: 50%;
  border: 6px solid #fff;
  border-color: ${({theme})=> theme.colors.gray.normal} transparent ${({theme})=> theme.colors.gray.normal} transparent;
  animation: ${rotate} 1.2s linear infinite;
`;

const LoadingIndicator = () => {
  return (
    <Root>
      <Content/>
    </Root>
  );
};

export default LoadingIndicator;
