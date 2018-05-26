import React from 'react';
import styled from 'styled-components';

export default function Banner() {
  return (
    <Root>
      <Text>Oregon Bloodbowl</Text>
    </Root>
  );
}

const Root = styled.div`
  text-align: center;
`;

const Text = styled.h1`

`;