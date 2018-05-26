import React from 'react';
import styled from 'styled-components';

export default function Hero(props) {
  return (
    <Root>
      <Text>Oregon Bloodbowl</Text>
      {props.children}
    </Root>
  );
}

const Root = styled.div`
  background: url('${require('../assets/hero.jpg')}') no-repeat;
  background-size: cover;
  height: 600px;
  padding-top: 50px;
  position: relative;
`;

const Text = styled.h1`
  background-color: rgba(25,0,0,0.35);
  font-size: 80px;
  text-align: center;
  padding: 50px 0 50px;
`;