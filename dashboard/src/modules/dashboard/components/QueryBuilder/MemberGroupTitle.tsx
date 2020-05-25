import React from 'react';

import styled from 'styled-components';

const LabelStyled = styled.div`
  margin-bottom: 12px;
  color: #a1a1b5;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  font-size: 11px;
  font-weight: bold;
`;

const MemberGroupTitle = (title) => <LabelStyled>{title}</LabelStyled>;

export default MemberGroupTitle;
