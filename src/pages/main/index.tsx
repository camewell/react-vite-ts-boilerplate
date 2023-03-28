import React from 'react';
import styled from 'styled-components';
import Text from '@/components/Text';

const Container = styled.div`
  background-color: #0a53be;
`;

const Main = () => {
  return (
    <Container>
      <Text size="regular">TEST</Text>
    </Container>
  );
};

export default Main;
