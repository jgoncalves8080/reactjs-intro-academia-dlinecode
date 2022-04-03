import styled, { css } from 'styled-components';

export const Container = styled.section`
  background: ${({ isDark }) => (isDark ? 'rgb(3, 24, 31)' : '#c3c3c3')};
  height: 15.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  /* ${({ isDark }) => css`
    background: ${isDark ? 'rgb(3, 24, 31)' : '#c3c3c3'};
    color: ${isDark ? '#fff' : '#000'};
    border: ${isDark ? '1px solid #fff' : '1px solid #000'};
  `} */
`;
export const Description = styled.h2`
  color: #fff;
`;
