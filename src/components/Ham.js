import React from 'react';
import styled from 'styled-components';

export default function Ham() {
  return (
    <Root>
      <Image/>
    </Root>
  );
}

const Root = styled.div`
  position: fixed;
  right: 0;
  bottom: -50px;

  &:hover img {
    transform: translate(0, 0);
  }
`;

const Image = styled.img.attrs({src: require('../assets/ham.png')})`
  transform: translate(150%, 0);
  transition: transform 2s;
`;