import React from 'react';
import styled from 'styled-components';

import Package from './Package';

const StyledPackageDisplay = styled.div`
  display: flex;
  justify-content: space-between;
`;

const test = {
  title: 'Package',
  included: ['Something', 'Something', 'Something', 'Something'],
  price: '$60',
}

function PackageDisplay() {
  return (
    <StyledPackageDisplay>
      <Package title={test.title} included={test.included} price={test.price} />
      <Package title={test.title} included={test.included} price={test.price} />
      <Package title={test.title} included={test.included} price={test.price} />
    </StyledPackageDisplay>
  )
}

export default PackageDisplay;